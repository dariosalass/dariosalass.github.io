#!/bin/bash

# Ruta al archivo de lista
lista="/home/dario/timbre/lista.m3u"

# Seleccionar una canción aleatoria
cancion=$(shuf -n 1 "$lista")

# Comprobar que la canción no esté vacía
if [ -z "$cancion" ]; then
  echo "No se encontró una canción en la lista."
  exit 1
fi

# Mostrar qué canción va a sonar
echo "🎵 Reproduciendo: $cancion"

# Reproducir el audio desde YouTube con mpv
mpv --no-video "$cancion" || echo "Error al reproducir la canción: $cancion"
