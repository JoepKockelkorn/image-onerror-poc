// Import stylesheets
import './style.css';

var image = new Image();
// image.src = 'https://squidex.local/api/assets/logos/63034a3bbe21aff616033c5';
image.src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAA1BMVEX/AAAZ4gk3AAAAJklEQVRoge3BgQAAAADDoPlTH+AKVQEAAAAAAAAAAAAAAAAAALwBPIwAAaxYm/wAAAAASUVORK5CYII=';
image.onerror = (event) =>
  (event.target.src =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIArgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBf/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgMF/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APEUV67zkIoUiqEIKFIKJILCGJBYJIiiSCgLIokyjSAtigZBQhIKFIKFEIokgoQkFEWYRRJIkaRJEaRFEigLUVRllFAghFCkVSEVIsWBTIqJIKIoKiQAkjLWoGkRRFsUZYAChcFIFAgRUSQERACRACEERVldQEBEXUBlzFRShQIUEKARIQERFCURUBEVEkABQERdgGXNRFKVUCBFCkRURACgBJEVERFQERURQVAXUBlzFRSlEUoAIEURQVCkFEkRURRFZBVAREAF1AZYAClVCkKIpQAQAJCKzqJrKs6GjdZXUTQCBKgJOyAywAFKAUoBCgIABKJoJIzoBpNQA0gCKAJP/9k=');
document.body.appendChild(image);
