let certificados = [
  {
    "codigo": "B360-001",
    "nombre": "Ana Salazar",
    "curso": "Curso de Diseño con Canva",
    "fecha": "2025-03-01"
  },
  {
    "codigo": "B360-002",
    "nombre": "Luis Moreno",
    "curso": "Curso de CapCut Básico",
    "fecha": "2025-04-10"
  }
];

function validarCodigo() {
  const codigo = document.getElementById("codigoInput").value.trim().toUpperCase();
  const resultadoDiv = document.getElementById("resultado");
  const certificado = certificados.find(c => c.codigo === codigo);

  if (certificado) {
    resultadoDiv.innerHTML = `
      <p><strong>Código válido</strong></p>
      <p>Nombre: ${certificado.nombre}</p>
      <p>Curso: ${certificado.curso}</p>
      <p>Fecha: ${certificado.fecha}</p>
    `;
  } else {
    resultadoDiv.innerHTML = "<p style='color:red;'><strong>Certificado no encontrado</strong></p>";
  }
}

// Captura QR
const html5QrCode = new Html5Qrcode("preview");
html5QrCode.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 200 },
  qrCodeMessage => {
    document.getElementById("codigoInput").value = qrCodeMessage;
    validarCodigo();
    html5QrCode.stop();
  }
).catch(err => {
  console.error("Error escaneando QR:", err);
});