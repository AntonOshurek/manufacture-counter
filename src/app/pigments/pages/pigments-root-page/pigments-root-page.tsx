//components
import { ItemsList, PageNotification } from '../../../../components';
//services
import pigmentsAdapterService from '../../services/pigments-adapter.service';
//store
import { useAppSelector } from '../../../../hooks/hooks';
import { SelectorGetPigments } from '../../store/slectors/selectors';
//layouts
import { PageWithMenuLayout } from '../../../../layouts';
//variables
import { AppRouting, ErrorsText, NotificationType } from '../../../../variables';
import { PIGMENTS_TEXT } from '../../variables';
//styles
import style from './pigments-root-page.module.scss';

const PigmentsRootPage = () => {
  const pigmentsState = useAppSelector(SelectorGetPigments());
  const adaptedData = pigmentsAdapterService.adaptItemsDataToDisplayList(pigmentsState);

  return (
    <PageWithMenuLayout headerTitle={PIGMENTS_TEXT.PIGMENTS} backLink={AppRouting.ROOT.path}>
      <main className={style['pigments-root-page']}>
        {adaptedData ? (
          <ItemsList data={adaptedData} />
        ) : (
          <PageNotification
            type={NotificationType.ERROR}
            headingText={ErrorsText.SOMETHING_WENT_WRONG}
            paragraphText={ErrorsText.ITEMS_LIST_NOT_FOUND}
          />
        )}
      </main>
    </PageWithMenuLayout>
  );
};

export default PigmentsRootPage;