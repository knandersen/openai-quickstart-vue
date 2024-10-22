export async function createCompletionsChat(res, content) {
  try {
    const userMessages = [{ role: 'user', content: content.value }]

    const requestData = JSON.stringify({
      model: 'gpt-4o',
      messages: userMessages,
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
    const { choices } = await response.json()
    res.value = choices[0].message.content
  } catch (error) {
    console.error(error)
    res.value = error.response.data.error.message
  }
}
