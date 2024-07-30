import ollama
tamil_text = 'உங்க பிரசன்டேஷன் ரொம்ப நல்லா இருந்தது'
prompt = "Please translate it into English make sure its sweet and formal , tamil text=>{" + tamil_text +"}"


response = ollama.chat(model='llama2', messages=[
  {
    'role': 'user',
    'content': prompt,
  },
])
print(response['message']['content'])