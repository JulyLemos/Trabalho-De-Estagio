
from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates


router = APIRouter()

templates = Jinja2Templates(directory="templates")


@router.get("/")
def get_root(request: Request):
    return templates.TemplateResponse("index.html")

@router.get("/lar")
def get_cadastro_livros(request: Request):
    return templates.TemplateResponse("lar.html")

@router.get("/login")
def get_login(request: Request):
    return templates.TemplateResponse("login")
