import VerSeguimientoBtn from "../components/VerSeguimientoBtn";

export const columnasCliente = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
      field: 'Ver',
      width: 60,
      align:'left',
      renderCell: (cellValues) => {
        return (
          <VerSeguimientoBtn cellValues={cellValues} />
        );
      }
    },
    {
      field: 'fecha',
      headerName: 'Fecha',
      width: 250,
      editable: true,
    },
    {
      field: 'tipo',
      headerName: 'Tipo',
      width: 150,
      editable: true,
    },
    {
      field: 'canal',
      headerName: 'Canal',
      width: 150,
      editable: true,
    },
    {
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 250,
      editable: true,
    }
  ];