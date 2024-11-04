
from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from util import ler_html


router = APIRouter()

templates = Jinja2Templates(directory="templates")


@router.get("/")
def get_root(request: Request):
    html = ler_html("index")
    return HTMLResponse(html)

@router.get("/lar")
def get_lar(request: Request):
    html = ler_html("lar")
    return HTMLResponse(html)

@router.get("/login")
def get_login(request: Request):
    html = ler_html("login")
    return HTMLResponse(html)

@router.get("/pre_cadastro")
def get_precad(request: Request):
    html = ler_html("pre_cadastro")
    return HTMLResponse(html)

@router.get("/cadastro")
def get_cad(request: Request):
    html = ler_html("cadastro")
    return HTMLResponse(html)

