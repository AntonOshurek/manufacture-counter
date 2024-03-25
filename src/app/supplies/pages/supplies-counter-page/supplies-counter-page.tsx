//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { CountableItemInfo, Counter } from '../../components';
//variables
import { SuppliesAppRouting } from '../../variables';
//style
import style from './supplies-counter-page.module.scss';

const SuppliesCounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout backLink={SuppliesAppRouting.ROOT.path} headerTitle={'licznik komponentów'}>
      <main className={style['counter-page']}>
        <CountableItemInfo />
        <Counter />
      </main>
    </CounterPageLayout>
  );
};

export default SuppliesCounterPage;