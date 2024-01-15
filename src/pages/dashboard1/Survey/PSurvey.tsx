import React, { useEffect, useState } from 'react'
import styles from "./PSurvey.module.css"
import { ModalPortal, SearchModal, Title } from 'components/PDashboard/common'
import SurveyList from 'components/PDashboard/Dashboard/SurveyList/SurveyList'
import { IScore, ModalState } from 'types/pType';
import { SearchBar } from 'components/PDashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { userAction } from 'redux/features/pDashboard';

export default function PSurvey() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.pDash);
  const [survey, setSurevey] = useState<IScore>({});
  const [openModal, setOpenModal] = useState<ModalState>({
    showSearchbar: false,
  });

  const onChangeSurvey = (id: string, score: number) => {
    setSurevey((prev) => ({
      ...prev,
      [id]: {
        score: score
      }
    }));
  };

  const onOpenModal = (type: string) => {
    if (type === "search") {
      setOpenModal({
        ...openModal,
        showSearchbar: true,
      });
    }
  };

  const onCloseModal = () => {
    setOpenModal({
      showSearchbar: false,
    });
  };

  console.log(user);
  useEffect(()=>{
    dispatch(userAction({}))
  },[])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.hHeader}>
          <Title>Survey</Title>
          <SearchBar onOpenModal={onOpenModal} />
        </div>
        <div>score:{SumScroe(survey)}</div>
      </header>
      <div className={styles.page}>
        <SurveyList onChangeSurvey={onChangeSurvey} survey={survey} />
      </div>
      <ModalPortal>
        {openModal.showSearchbar ?  (
          <SearchModal
            onCloseModal={onCloseModal}
            setOpenModal={setOpenModal}
          />
        ) : null}
      </ModalPortal>
    </div>
  )
}

function SumScroe(survey: IScore) {
  const arr = Object.values(survey);
  let total = 0;
  for (const index in arr) {
    total += arr[index].score
  }
  return total;
}
