# BitGPT Registry

This repository contains the open registry of BitGPT AI providers. The registry is a list of AI providers offering services as API, such as LLM inference or fine-tuning. The registry is open for anyone to contribute to.

## How to add a new provider

To add a new provider, please create a new file in the `providers` directory. The file MUST be named after the provider with the format `<domain>/<name>.json`. The file MUST contain the following fields:

```json
{
  "name": "provider.com/provider-name",
  "description": "A short description of the provider",
  "url": "https://provider.com",
  "public_key": "0x00",
  "capabilities": [
    {
      "baseUrl": "https://my-inference.provider.com/v1/chat/completions",
      "type": "openai-inference"
    },
    {
      "baseUrl": "https://my-finetuning.provider.com/v1/finetune",
      "type": "openai-finetuning"
    }
  ]
}
```

The `public_key` field can be used to verify the authenticity of the provider, expecting under a JSON `.well-known/bitgpt.json` containing a signature made with the private key. The `capabilities` field is a list of endpoints that the provider offers. The `type` field can be one of the following:

- `openai-inference`: The provider offers LLM inference services
- `openai-finetuning`: The provider offers fine-tuning services

## How to use the registry

The registry is available as a JSON file at the root of the repository `registry.json` built on every new push to `main`. You can use this file to programmatically access the list of providers.
