# OpenAI CLI Chat Application

A command-line interface chat application that uses OpenAI's GPT-3.5 Turbo model to have conversations with an AI assistant.

## Features

- Interactive command-line chat interface
- Maintains conversation history for context
- Uses OpenAI's GPT-3.5 Turbo model
- Configurable response parameters (temperature, max tokens)
- Real-time token usage tracking

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- OpenAI API key

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API credentials:

```env
OPENAI_API_KEY=your_api_key_here
OPENAI_ORGANIZATION=your_organization_id_here  # Optional
```

## Usage

Run the application:

```bash
node first_call.js
```

- Type your questions and press Enter to chat with the AI
- Type 'exit' to end the conversation
- The AI will respond with a message and show the total tokens used

## Configuration

The application uses the following default settings:

- Model: GPT-3.5 Turbo
- Temperature: 0.7
- Max Tokens: 10
- Stop Sequence: ["Tathagat"]

You can modify these settings in the `first_call.js` file.

## Dependencies

- openai: OpenAI API client
- dotenv: Environment variable management
- readline: Command-line interface handling // already in node
