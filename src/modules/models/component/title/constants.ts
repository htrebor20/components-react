import { TableProps } from "../../../../components/table/types";

export const tableData: TableProps = {
  dataHead: [
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Correo' },
    { id: 'role', label: 'Rol' },
    { id: 'status', label: 'Estado' },
  ],
  content: [
    { name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin', status: 'Activo' },
    { name: 'Ana Gómez', email: 'ana@example.com', role: 'Usuario', status: 'Inactivo' },
    { name: 'Carlos Ruiz', email: 'carlos@example.com', role: 'Moderador', status: 'Activo' },
    { name: 'Luisa Martínez', email: 'luisa@example.com', role: 'Usuario', status: 'Activo' },
    { name: 'Pedro Torres', email: 'pedro@example.com', role: 'Admin', status: 'Inactivo' },
    { name: 'Laura Ríos', email: 'laura@example.com', role: 'Usuario', status: 'Activo' },
    { name: 'Diego Ramírez', email: 'diego@example.com', role: 'Moderador', status: 'Activo' },
    { name: 'Camila Vargas', email: 'camila@example.com', role: 'Usuario', status: 'Inactivo' },
    { name: 'Jorge Navas', email: 'jorge@example.com', role: 'Usuario', status: 'Activo' },
    { name: 'María Cano', email: 'maria@example.com', role: 'Admin', status: 'Activo' },
    { name: 'Andrés Méndez', email: 'andres@example.com', role: 'Usuario', status: 'Inactivo' },
    { name: 'Sara Blanco', email: 'sara@example.com', role: 'Moderador', status: 'Activo' },
    { name: 'Esteban Hoyos', email: 'esteban@example.com', role: 'Usuario', status: 'Activo' },
    { name: 'Valentina López', email: 'valentina@example.com', role: 'Usuario', status: 'Inactivo' },
  ],
};
