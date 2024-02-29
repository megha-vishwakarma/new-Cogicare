
from langchain.chains import LLMChain
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
from IPython.display import Markdown
from langchain_google_genai import ChatGoogleGenerativeAI


load_dotenv()


#summary_template = '''
#I want you to act as an AI assistant that can analyze text to understand its overall sentiment and themes.
#I will provide you with some text {information}, and your job is to describe what kind of music it would inspire, based on the emotions and concepts expressed.
##Really get into the feeling of the text and translate that into a detailed prompt for generating appropriate music. Focus on aspects like mood, tempo, instruments, melody, and how they should work together to reflect the essence of the text. Feel free to get creative and descriptive in how you convey the musical qualities. The end goal is a prompt that I can use to generate music that meaningfully captures the spirit of the text.
#For example, if I provide the text: "A sad poem about lost love and regret", you might respond with:

#"slow music, melancholy piano music with soft, mournful strings joining in. The melody should be somber yet sweet, evoking nostalgia and heartache. The instruments cry together, echoing the painful ache expressed in the words."
#'''
def prompt(information):
    summary_template = '''Analyze the sentiment and themes of the text {information} I provide (dont mention it in the output). 
    Describe the mood, tempo, instruments, and musical elements( in one sentence) to reflect the 
    emotions in a few concise sentences. Only desrcibe the music that would suit the information and dont include any refernce 
    from the information.'''
    summ_prompt_template = PromptTemplate(
                input_variables=[information],template=summary_template
    )

    #llm = ChatOpenAI(model_name='gpt-3.5-turbo-0125', temperature=0.5)
    llm = ChatGoogleGenerativeAI(model='gemini-pro', temperature=0.5)
    chain = LLMChain(llm=llm, prompt=summ_prompt_template)
    res = chain.invoke(input=information)
    global senti 
    senti = res['text']
    return senti
