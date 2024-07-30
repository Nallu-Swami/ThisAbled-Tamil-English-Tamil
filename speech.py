from gtts import gTTS

text = 'உங்க பிரசன்டேஷன் ரொம்ப நல்லா இருந்தது'
tts = gTTS(text=text, lang='ta')
tts.save('output.mp3')
print('Audio content written to file: output.mp3')
