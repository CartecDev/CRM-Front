import VerClienteBtn from "../components/VerClienteBtn";
import ModClienteBtn from "../components/ModClienteBtn";
import DelClienteBtn from "../components/DelClienteBtn";
import CrearConsultaBtn from "../components/CrearConsultaBtn";
import EstadoCliente from "../components/EstadoCliente";
import MailClienteBtn from "../pages/MailClienteBtn";

export const columnasClientes = [
  { field: 'id', headerName: 'ID', width: 30 },
  {
    field: "🚦",
    width: 50,
    align:'left',
    renderCell: (cellValues) => {
      return (
        <EstadoCliente sx={infoBtn} cellValues={cellValues} />
      );
    }
  },
  {
    field: "ℹ️",
    width: 50,
    align:'left',
    renderCell: (cellValues) => {
      return (
        <VerClienteBtn sx={infoBtn} cellValues={cellValues}/>
      );
    }
  },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'apellidos',
    headerName: 'Apellidos',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'telefono',
    headerName: 'Telefono',
    width: 120,
    editable: true,
  },
  {
    field: "Mail",
    width: 60,
    align:'left',
    renderCell: (cellValues) => {
      return (
        <MailClienteBtn sx={infoBtn} cellValues={cellValues} />
      );
    }
  },
  {
    field: "Consulta",
    width: 80,
    align:'left',
    renderCell: (cellValues) => {
      return (
        <CrearConsultaBtn sx={infoBtn} cellValues={cellValues} />
      );
    }
  },
  {
    field: 'dni',
    headerName: 'DNI',
    width: 100,
    editable: true,
  },
  {
    field: 'provincia',
    headerName: 'Provincia',
    width: 150,
    editable: true,
  },
  {
    field: 'pasaporte',
    headerName: 'Pasaporte',
    width: 120,
    editable: true,
  },
  {
    field: "⚙️",
    width: 60,
    align:'left',
    renderCell: (cellValues) => {
      return (
        <ModClienteBtn sx={infoBtn} cellValues={cellValues}/>
      );
    }
  },
  {
    field: "🗑",
    width: 60,
    align:'left',
    renderCell: (cellValues) => {
      return (
        <DelClienteBtn sx={infoBtn} cellValues={cellValues} />
      );
    }
  }
];

// Estilos

const infoBtn = {
  backgroundColor: 'transparent',
  border: '1px solid #6ea3ff',
  color: '#333333',
  "&:hover": {
    backgroundColor: '#6ea3ff',
    color: 'white'
  },
};