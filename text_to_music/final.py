from llm_in import prompt
from sound_ import play

info = input("Enter your text - ")

value_ = prompt(info)
music_g = play(value_)