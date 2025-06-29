# vim

## Color schemes

```sh
mkdir -p ~/.vim/colors # Crear carpeta de temas
wget COLOR.vim -O ~/.vim/colors/COLOR.vim
colorscheme COLOR # Y agregar a vimrc
```

- [Sonokai](https://github.com/sainnhe/sonokai)
- [PaperColor](https://github.com/NLKNguyen/papercolor-theme)

## /etc/vim/vimrc.local, ~/.vimrc

```ini
" Si no funciona set mouse=, descomentar la siguiente
" let g:skip_defaults_vim = 1

" Simple configuration
set nocompatible

" Caracteres no imprimibles (se quedan en el copy)
" set list
" set lcs+=space:.

set viminfo='1000,f1,:1000,/1000
set history=500

set backspace=2
set tabstop=2
set shiftwidth=2
set expandtab
set autoindent
" No perder la seleccion al indentar
vnoremap > >gv
vnoremap < <gv

nnoremap q: <nop>
nnoremap Q <nop>

highlight ExtraWhitespace ctermbg=red guibg=red
match ExtraWhitespace /\s\+$/

" Don't break lines
set tw=10000

" Show matching brackets
set sm
set showmatch

" Default UI color
"set background=dark
" colorscheme desert
set nobackup
if !has("eval")
  set nofoldenable
endif
set cursorline

" No mouse
set mouse=

" Centrar siempre la linea
au CursorMoved * normal! zz

" Recordar última posición en archivo
if has("autocmd")
  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif

" Show command
set showcmd

" Search options
set hlsearch
set incsearch

" Complete menu
set wildmenu
set wildignore+=*.o,*~,.lo
set suffixes+=.in,.a

set popt+=syntax:y

" Statusbar
set laststatus=2
set statusline=
set statusline+=%2*%-3.3n%0*\                " buffer number
set statusline+=%f\                          " file name
set statusline+=\[%{strlen(&ft)?&ft:'none'}, " filetype
set statusline+=%{&encoding},                " encoding
set statusline+=%{&fileformat}]              " file format
set statusline+=%=                           " right align
set statusline+=%2*0x%-8B\                   " current char
set statusline+=%-14.(%l,%c%V%)\ %<%P        " offset
if has("gui")
  " Yeay, gvim like vim!
  set guioptions=aegiLt
  hi Normal guibg=black guifg=white
else
  hi StatusLine ctermbg=6 ctermfg=8
endif

" Full colorful terminal
set term=xterm-256color

" Enable syntax highlighting
if has("syntax")
  syntax on
  autocmd BufNewFile,BufRead *.tfvars set syntax=tf
endif
```
