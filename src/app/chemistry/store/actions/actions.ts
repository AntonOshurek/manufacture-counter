import { chemistrySlice } from '../slice/slice';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type {
  AppThunk,
  IChangeItemAdditionalSettingActionPayload,
  IClearItemActionPayload,
  IIncDecActionPayload,
} from '../../../../types';

const { increment, decrement, log, clearItem, clearData, changeItemAdditionalSetting } =
  chemistrySlice.actions;

const incrementAction =
  (action: IIncDecActionPayload): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: `+${action.value.toString()}`,
      counterName: action.counterName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry);
  };

const decrementAction =
  (action: IIncDecActionPayload): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: `-${action.value.toString()}`,
      counterName: action.counterName,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry);
  };

const clearItemDataAction =
  (action: IClearItemActionPayload): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = chemistryRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    chemistryRepository.sendData(getState().chemistry);
  };

const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = chemistryRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  chemistryRepository.clearData();
};

const changeItemAdditionalSettingAction =
  (action: IChangeItemAdditionalSettingActionPayload): AppThunk =>
  (dispatch, getState) => {
    dispatch(changeItemAdditionalSetting(action));
    chemistryRepository.sendData(getState().gums);
  };

export {
  incrementAction,
  decrementAction,
  clearItemDataAction,
  clearDataAction,
  changeItemAdditionalSettingAction,
};
