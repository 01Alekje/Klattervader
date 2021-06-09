import { useEffect, useState } from 'react';

import DataTable, { createTheme } from 'react-data-table-component';
import ExpandableRow from '../ExpandableRow/ExpandableRow';

import { TopListView, AreaList } from './styled';

export default function TopList() {
  const [allAreas, setAllAreas] = useState<any>();
  const [rows, setRows] = useState<any>([]);
  // const [columns, setColumns] = useState<any>({});

  useEffect(()=> {
    // getAll();
    starterBoi();
  }, []);

  async function getAll(): Promise<any> {
    fetch('https://localhost:5001/api/weatherforecasts')
      .then(response => response.json())
      .then(data => setAllAreas(data));
  }

  async function starterBoi() {
    await getAll();
    assignData();
  }

  function assignData() {
    allAreas.forEach(function(area: any) {
      console.log(area);
    });
  }
  // const data = [
  //   { rank: 1, namn: 'Utby', discipliner: 'Sport, Boulder, Traditionell', senastRegn: '> 48 timmar', temp: '15°', fukt: "56%", omrade: 'Göteborg', betyg: '98%' },
  //   { rank: 2, namn: 'Korridoren', discipliner: 'Boulder', senastRegn: '36 timmar', temp: '14°', fukt: "62%", omrade: 'Mölndal', betyg: '96%' },
  //   { rank: 3, namn: 'Greggered', discipliner: 'Sport, Traditionell', senastRegn: '34 timmar', temp: '16°', fukt: "63%", omrade: 'Lindome', betyg: '94%' },
  //   { rank: 4, namn: 'Kjugekull', discipliner: 'Boulder', senastRegn: '32 timmar', temp: '16°', fukt: "65%", omrade: 'Småland', betyg: '90%' },
  //   { rank: 5, namn: 'Tumlehed', discipliner: 'Boulder', senastRegn: '29 timmar', temp: '17°', fukt: "69%", omrade: 'Göteborg', betyg: '85%' },
  //   { rank: 6, namn: 'Hönö', discipliner: 'Boulder', senastRegn: '25 timmar', temp: '19°', fukt: "71%", omrade: 'Göteborg', betyg: '79%' },
  //   { rank: 7, namn: 'Öckerö', discipliner: 'Boulder', senastRegn: '22 timmar', temp: '15°', fukt: "74%", omrade: 'Göteborg', betyg: '75%' },
  //   { rank: 8, namn: 'Häller', discipliner: 'Boulder, Traditionell', senastRegn: '18 timmar', temp: '21°', fukt: "76%", omrade: 'Lysekil', betyg: '73%' },
  //   { rank: 9, namn: 'Träleberget', discipliner: 'Sport, Traditionell', senastRegn: '15 timmar', temp: '23°', fukt: "78%", omrade: 'Lysekil', betyg: '70%' },
  //   { rank: 10, namn: 'Seglora', discipliner: 'Sport', senastRegn: '10 timmar', temp: '24°', fukt: "81%", omrade: 'Göteborg', betyg: '68%' },
  //   { rank: 11, namn: 'Lexby', discipliner: 'Sport, Boulder, Traditionell', senastRegn: '6 timmar', temp: '22°', fukt: "80%", omrade: 'Göteborg', betyg: '68%' },
  //   { rank: 12, namn: 'Fjällbacka', discipliner: 'Boulder', senastRegn: '2 timmar', temp: '22°', fukt: "84%", omrade: 'Göteborg', betyg: '57%' },
  //   { rank: 13, namn: 'Rosendal', discipliner: 'Sport, Boulder, Traditionell', senastRegn: '< 1 timmar', temp: '20°', fukt: "86%", omrade: 'Örebro', betyg: '55%' },
  //   { rank: 14, namn: 'Bo-Blocket', discipliner: 'Boulder', senastRegn: '< 1 timmar', temp: '25°', fukt: "88%", omrade: 'Göteborg', betyg: '52%' },
  //   { rank: 15, namn: 'Utby2', discipliner: 'Sport, Boulder, Traditionell', senastRegn: '> 48 timmar', temp: '15°', fukt: "56%", omrade: 'Göteborg', betyg: '98%' },
  //   { rank: 16, namn: 'Korridoren2', discipliner: 'Boulder', senastRegn: '36 timmar', temp: '14°', fukt: "62%", omrade: 'Mölndal', betyg: '96%' },
  //   { rank: 17, namn: 'Greggered2', discipliner: 'Sport, Traditionell', senastRegn: '34 timmar', temp: '16°', fukt: "63%", omrade: 'Lindome', betyg: '94%' },
  //   { rank: 18, namn: 'Kjugekull2', discipliner: 'Boulder', senastRegn: '32 timmar', temp: '16°', fukt: "65%", omrade: 'Småland', betyg: '90%' },
  //   { rank: 19, namn: 'Tumlehed2', discipliner: 'Boulder', senastRegn: '29 timmar', temp: '17°', fukt: "69%", omrade: 'Göteborg', betyg: '85%' },
  //   { rank: 20, namn: 'Hönö2', discipliner: 'Boulder', senastRegn: '25 timmar', temp: '19°', fukt: "71%", omrade: 'Göteborg', betyg: '79%' },
  //   { rank: 21, namn: 'Öckerö2', discipliner: 'Boulder', senastRegn: '22 timmar', temp: '15°', fukt: "74%", omrade: 'Göteborg', betyg: '75%' },
  //   { rank: 22, namn: 'Häller2', discipliner: 'Boulder, Traditionell', senastRegn: '18 timmar', temp: '21°', fukt: "76%", omrade: 'Lysekil', betyg: '73%' },
  //   { rank: 23, namn: 'Träleberget2', discipliner: 'Sport, Traditionell', senastRegn: '15 timmar', temp: '23°', fukt: "78%", omrade: 'Lysekil', betyg: '70%' },
  //   { rank: 24, namn: 'Seglora2', discipliner: 'Sport', senastRegn: '10 timmar', temp: '24°', fukt: "81%", omrade: 'Göteborg', betyg: '68%' },
  //   { rank: 25, namn: 'Lexby2', discipliner: 'Sport, Boulder, Traditionell', senastRegn: '6 timmar', temp: '22°', fukt: "80%", omrade: 'Göteborg', betyg: '68%' },
  //   { rank: 26, namn: 'Fjällbacka2', discipliner: 'Boulder', senastRegn: '2 timmar', temp: '22°', fukt: "84%", omrade: 'Göteborg', betyg: '57%' },
  //   { rank: 27, namn: 'Rosendal2', discipliner: 'Sport, Boulder, Traditionell', senastRegn: '< 1 timmar', temp: '20°', fukt: "86%", omrade: 'Örebro', betyg: '55%' },
  //   { rank: 28, namn: 'Bo-Blocket2', discipliner: 'Boulder', senastRegn: '< 1 timmar', temp: '25°', fukt: "88%", omrade: 'Göteborg', betyg: '52%' },
  // ];

  // const rows: GridRowsProp = [
  //   { id: 1, rank: '1', namn: 'Utby', discipliner: 'Sport, Boulder, Traditionell', lastRain: '> 48 timmar', temp: '15°', fukt: "56%", koordinater: '57.743816, 12.059076', betyg: '98%' },
  //   { id: 2, rank: '2', namn: 'Korridoren', discipliner: 'Boulder', lastRain: '36 timmar', temp: '14°', fukt: "62%", koordinater: '57.743816, 12.059076' },
  //   { id: 3, rank: '3', namn: 'Greggered', discipliner: 'Sport, Traditionell', lastRain: '34 timmar', temp: '16°', fukt: "63%", koordinater: '57.743816, 12.059076' },
  //   { id: 4, rank: '4', namn: 'Kjugekull', discipliner: 'Boulder', lastRain: '32 timmar', temp: '16°', fukt: "65%", koordinater: '57.743816, 12.059076' },
  //   { id: 5, rank: '5', namn: 'Tumlehed', discipliner: 'Boulder', lastRain: '29 timmar', temp: '17°', fukt: "69%", koordinater: '57.743816, 12.059076' },
  //   { id: 6, rank: '6', namn: 'Hönö', discipliner: 'Boulder', lastRain: '25 timmar', temp: '19°', fukt: "71%", koordinater: '57.743816, 12.059076' },
  //   { id: 7, rank: '7', namn: 'Öckerö', discipliner: 'Boulder', lastRain: '22 timmar', temp: '15°', fukt: "74%", koordinater: '57.743816, 12.059076' },
  //   { id: 8, rank: '8', namn: 'Häller', discipliner: 'Boulder, Traditionell', lastRain: '18 timmar', temp: '21°', fukt: "76%", koordinater: '57.743816, 12.059076' },
  //   { id: 9, rank: '9', namn: 'Träleberget', discipliner: 'Sport, Traditionell', lastRain: '15 timmar', temp: '23°', fukt: "80%", koordinater: '57.743816, 12.059076' },
  //   { id: 10, rank: '10', namn: 'Seglora', discipliner: 'Sport', lastRain: '10 timmar', temp: '24°', fukt: "81%", koordinater: '57.743816, 12.059076' },
  //   { id: 11, rank: '11', namn: 'Lexby', discipliner: 'Sport, Boulder, Traditionell', lastRain: '6 timmar', temp: '22°', fukt: "80%", koordinater: '57.743816, 12.059076' },
  //   { id: 12, rank: '12', namn: 'Fjällbacka', discipliner: 'Boulder', lastRain: '2 timmar', temp: '22°', fukt: "84%", koordinater: '57.743816, 12.059076' },
  //   { id: 13, rank: '13', namn: 'Rosendal', discipliner: 'Sport, Boulder, Traditionell', lastRain: '< 1 timmar', temp: '20°', fukt: "86%", koordinater: '57.743816, 12.059076' },
  //   { id: 14, rank: '14', namn: 'Bo-Blocket', discipliner: 'Boulder', lastRain: '< 1 timmar', temp: '25°', fukt: "88%", koordinater: '57.743816, 12.059076' },
  // ];

  // const columns: GridColDef[] = [
  //   { field: 'rank', headerName: 'Rank', width: 100 },
  //   { field: 'namn', headerName: 'Namn', width: 150, renderCell: (params) => (<a href={`${params.getValue("namn")}`}>{params.getValue("namn")}</a>) },
  //   { field: 'discipliner', headerName: 'Discipliner', width: 200 },
  //   { field: 'lastRain', headerName: 'Senast regn', width: 150 },
  //   { field: 'temp', headerName: 'Temperatur', width: 150 },
  //   { field: 'fukt', headerName: 'Luftfuktighet', width: 150 },
  //   { field: 'koordinater', headerName: 'Koordinater', width: 200 },
  //   { field: 'betyg', headerName: 'Score', width: 150 }
  // ];

  // createTheme('solarized', {
  //   text: {
  //     primary: '#268bd2',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#002b36',
  //   },
  //   context: {
  //     background: '#cb4b16',
  //     text: '#FFFFFF',
  //   },
  //   divider: {
  //     default: '#073642',
  //   },
  //   action: {
  //     button: 'rgba(0,0,0,.54)',
  //     hover: 'rgba(0,0,0,.08)',
  //     disabled: 'rgba(0,0,0,.12)',
  //   },
  // });

  const columns = [
    {
      name: 'Rank',
      selector: 'rank',
      sortable: true,
      width: "150px"
    },
    {
      name: 'Namn',
      selector: 'namn',
      sortable: true,
      width: "250px"
      // right: true,
      // width: "150px"
    },
    {
      name: 'Discipliner',
      selector: 'discipliner',
      sortable: true,
      width: "250px"
      // right: true,
    },
    {
      name: 'Senast Regn',
      selector: 'senastRegn',
      sortable: true,
      width: "200px"
      // right: true,
    },
    {
      name: 'Temperatur',
      selector: 'temp',
      sortable: true,
      width: "150px"
      // right: true,
    },
    {
      name: 'Luftfuktighet',
      selector: 'fukt',
      sortable: true,
      width: "150px"
      // right: true,
    },
    {
      name: 'Område',
      selector: 'omrade',
      sortable: true,
      width: "200px"
      // right: true,
    },
    {
      name: 'Betyg',
      selector: 'betyg',
      sortable: true,
      width: "150px"
      // right: true,
    },
  ];

  return (
    <TopListView>

    <p>{`${allAreas}`}</p>
    <div style={{ height: "75vh", overflowY: "scroll" }}>
      <DataTable
        title="Topplistan"
        columns={columns}
        data={rows}
        responsive
        expandableRows
        expandableRowsComponent={<ExpandableRow data={rows}/>}
        overflowY={true}
        // pagination={true}
        // paginationRowsPerPageOptions={[5, 10, 15]}
        // theme="solarized"
      />
    </div>

      {/* <AreaList> */}
        {/* <div style={{ height: "75vh", width: "100%" }}> */}
          {/* <DataGrid 
            className="MuiDataGrid-window"
            rows={rows} 
            columns={columns} 
            components={{
              Toolbar: CustomToolBar,
            }} 
            autoPageSize={true}
            // onCellClick={() => alert("hello")}
            disableSelectionOnClick={true}
            rowsPerPageOptions={[10, 25, 50, 100]}
            // showColumnRightBorder={true}
            showCellRightBorder={true}
            disableExtendRowFullWidth={true}
            // autoHeight={true}
          /> */}
        {/* </div> */}
      {/* </AreaList> */}
    </TopListView>
  );
}