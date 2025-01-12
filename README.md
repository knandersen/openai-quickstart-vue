# openai-quickstart-vue

This is a quickstart template for using OpenAI's GPT-3 API in Vue 3.

![image](./assets/preview.png)

## Setup

1. Clone this repository and navigate into the project directory

   ```shell
   git clone https://github.com/knandersen/openai-quickstart-vue.git
   cd openai-quickstart-vue
   ```

2. Using `npm/yarn/pnpm/bun` to install dependencies

   ```shell
   pnpm install
   ```

3. Create the `.env` file to store your OpenAI API key and Orgnaization ID

   ```shell
   touch .env
   ```

4. Add your OpenAI API key and Orgnaization ID to the `.env` file

   ```shell
   # Example
   VITE_OPEN_API_KEY=xxxxxxxx
   ```

If this doesn't work for some reason, enter the API key directly in the script (but once this is done, never share your code with anyone else since your key will be exposed)

in `text.js`, change:

```
Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`
```

to:

```
Authorization: `Bearer <REPLACE_THIS_WITH_YOUR_API_KEY>`
```

5. Run the development server, and open [http://localhost:3000](http://localhost:3000) in your browser

   ```shell
   pnpm dev
   ```

6. Build the project for production

   ```shell
   pnpm build
   ```
