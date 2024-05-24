import moment from "moment";

/*
      <p><strong>Descripción:</strong> {incident_description}</p>
      <p><strong>Estado:</strong> {incident_status}</p>
      <p><strong>Fecha de creación:</strong> {moment(createdAt).format("DD/MM/YYYY")}</p>
      <p><strong>Ubicación:</strong> {`${alt}, ${long}, ${municipality}`}</p>
      <p><strong>Usuario técnico:</strong> {`${techName} - ${techEmail} - ${techPhone}`}</p>
      <p><strong>Usuario cliente:</strong> {`${clientName} - ${clientEmail} - ${clientPhone}`}</p>
*/

export const ColumnsTableReports = () => [
  {
    title: "Nombre",
    dataIndex: "incident_name",
  },
  {
    title: "Descripción",
    dataIndex: "incident_description",
  },
  {
    title: "Estado",
    dataIndex: "incident_status",
  },
  {
    title: "Ubicación",
    dataIndex: "incident_location",
    render: (location) => `${location.alt}, ${location.long}, ${location.municipality}`,
  },
  {
    title: "Usuario técnico",
    dataIndex: "technical_user",
    render: (user) => `${user.name} - ${user.email} - ${user.phone}`,
  },
  {
    title: "Usuario cliente",
    dataIndex: "client_user",
    render: (user) => `${user.name} - ${user.email} - ${user.phone}`,
  },
  {
    title: "Fecha de creación",
    dataIndex: "createdAt",
    render: (date) => moment(date).format("DD/MM/YYYY"),
  },
];
