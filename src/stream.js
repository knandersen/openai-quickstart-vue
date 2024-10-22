export async function createCompletionsChat(res, content) {
  try {
    const userMessages = [{ role: 'user', content: content.value }]

    const requestData = JSON.stringify({
      model: 'gpt-4o',
      messages: userMessages,
      stream: true,
    })

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
      },
      body: requestData,
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', fetchOptions)
    const reader = response.body.getReader()
    res.value = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunkStr = new TextDecoder('utf-8').decode(value)
      const lines = chunkStr
        .split('\n')
        .filter((line) => line !== '' && line.length > 0)
        .map((line) => line.replace(/^data: /, '').trim())
        .filter((line) => line !== '[DONE]')
        .map((line) => JSON.parse(line))
      for (const line of lines) {
        const {
          choices: [
            {
              delta: { content },
            },
          ],
        } = line
        if (content) {
          res.value += content
        }
      }
    }
    console.log('Stream ended.')
  } catch (error) {
    console.error(error)
    res.value = error.response.data.error.message
  }
}
