import Map from '@/components/Map';

import { MAP_MODE } from '@/constants';
import { StationT } from '@/types/network';
import styles from './style.module.css';

export type ListItemProps = StationT

export default function ListItem(props: ListItemProps) {
  return (
    <li>
      <div className={styles.listItemContainer}>
        {props.name}
        <div>
          <Map
            mode={MAP_MODE.COMPACT}
            position={[props.latitude, props.longitude]}
            zoom={17}
          />
        </div>
      </div>
    </li>
  )
}