from gtts import gTTS


text = 'என் பெயர் யோஷிகேஜ் கிரா. எனக்கு 33 வயது. எனது வீடு மொரியோவின் வடகிழக்கு பகுதியில் உள்ளது, அங்கு அனைத்து வில்லாக்களும் உள்ளன, எனக்கு திருமணம் ஆகவில்லை. நான் கேம் யூ டிபார்ட்மென்ட் ஸ்டோர்களில் பணியாளராகப் பணிபுரிகிறேன், மேலும் தினமும் இரவு 8 மணிக்குள் வீட்டிற்கு வருவேன். நான் புகைபிடிப்பதில்லை, ஆனால் எப்போதாவது குடிப்பேன். நான் இரவு 11 மணிக்குள் படுக்கையில் இருப்பேன், எதுவாக இருந்தாலும் நான் எட்டு மணிநேரம் தூங்குவதை உறுதி செய்து கொள்ளுங்கள்.'
tts = gTTS(text=text, lang='ta')
tts.save('output.mp3')
print('Audio content written to file: output.mp3')
