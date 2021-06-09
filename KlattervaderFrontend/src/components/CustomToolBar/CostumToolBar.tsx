import {
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
} from '@material-ui/data-grid';

export default function CustomToolBar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      <GridFilterToolbarButton />
    </GridToolbarContainer>
  );
}
