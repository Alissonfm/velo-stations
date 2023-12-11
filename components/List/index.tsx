'use client';
import ListItem from '@/components/ListItem';
import { StationT } from '@/types/network';

import styles from './style.module.css';

export type ListProps = {
  data: Array<StationT>
}

export default function List(props: ListProps) {
  const { data } = props;
  return (
    <ul className={styles.list}>
      {data.map(itemData => <ListItem {...itemData} />)}
    </ul>
  )
}