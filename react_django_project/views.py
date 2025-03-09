from django.http import HttpResponse
import json

def hello(request):
    data = "hello world"
    json_string = json.dumps(data)
    print("hello world")
    return HttpResponse(json_string)