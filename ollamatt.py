import ollama
tamil_text = 'என்னை தமிழ் தெரியாதா'
prompt = "Please translate it into English, tamil text=>{" + tamil_text +"}"


response = ollama.chat(model='llama2', messages=[
  {
    'role': 'user',
    'content': prompt,
  },
])
print(response['message']['content'])