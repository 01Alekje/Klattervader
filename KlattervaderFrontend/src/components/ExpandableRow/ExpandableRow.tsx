import DataTable, { createTheme } from 'react-data-table-component';

export default function ExpandableRow(props: any) {

  const columns: any = [
    {
      name: 'Regn 2 dagar (mm)',
      selector: 'regnMm',
    },
    {
      name: 'Nuvarande Aktivititet',
      selector: 'aktivitet',
    },
    {
      name: 'Koordinater',
      selector: 'koordinater',
      // cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: "bold" }}>{row.title}</div>{row.summary}</div>
    },
  ];

  const data: any = [
    { regnMm: 0.5, aktivitet: 'Ganska lite', koordinater: '57.172191, 108.697256' },
    // { regnMm: 0.5, aktivitet: 'Ganska lite', koordinater: '58.182915, 107.799152' },
  ];

  return (
    <div style={{ backgroundColor: "#F6F7FB", padding: "20px", display: "grid", gridTemplateColumns: "20% 80%", height: "auto" }}>
      <img src="#" alt={`bild på ${props.data.namn}`}/>
      <div style={{ backgroundColor: "blue" }}>
        <DataTable
          columns={columns}
          data={data}
          noHeader={true}
        />
      </div>
    </div>
  );
}