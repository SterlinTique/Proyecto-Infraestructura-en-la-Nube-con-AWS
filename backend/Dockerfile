# Imagen oficial de Python 3.11 como base
FROM python:3.11-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia y actualiza pip
RUN pip install --upgrade pip

# Copia el archivo de dependencias
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

# Establece variables de entorno (opcional, para producción)
ENV FLASK_APP=app.py
ENV FLASK_ENV=production

# Expone el puerto 5000
EXPOSE 5000

# Comando de inicio
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
