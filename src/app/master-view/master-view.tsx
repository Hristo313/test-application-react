import { IgrColumn, IgrGrid } from 'igniteui-react-grids';
import { useGetCategories } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const { northwindCategories } = useGetCategories();

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <IgrGrid data={northwindCategories} primaryKey="categoryID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
          <IgrColumn field="categoryID" dataType="number" header="categoryID" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="description" dataType="string" header="description" sortable={true} selectable={false}></IgrColumn>
          <IgrColumn field="name" dataType="string" header="name" sortable={true} selectable={false}></IgrColumn>
        </IgrGrid>
      </div>
    </>
  );
}
