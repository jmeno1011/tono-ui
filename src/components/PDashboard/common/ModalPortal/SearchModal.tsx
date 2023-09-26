import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { ReactComponent as Search } from "assets/p-dashboard/search-bold.svg";
import styles from "./SearchModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { UserInfo } from "types/pType";
import { getUserInfo, user, userCode } from "redux/features/pDashboard";
import { db } from "lib/api";

interface SearchModalProps {
  onCloseModal: () => void;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function SearchModal({
  onCloseModal,
  setOpenModal,
}: SearchModalProps) {
  const { userInfo } = useSelector((state: RootState) => state.pDash);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onClickUser = async (userinfo: UserInfo) => {
    dispatch(user(userinfo));
    dispatch(userCode(userinfo.CODE));
    setOpenModal(false);
    let { data, error } = await db
      .getPUser()
      .select("*")
      .eq("CODE", userinfo.CODE);
    if (error) {
      console.log("error: ", error);
    } else {
      dispatch(getUserInfo(data));
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      modalRef.current &&
      target &&
      target.contains(modalRef.current) &&
      !modalRef.current.contains(target)
    ) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={modalRef}>
        <header className={styles.header}>
          <Search />
          <input
            type="text"
            placeholder="Search..."
            value={name}
            onChange={onChangeName}
          />
        </header>
        <div className={styles.nameAreaHeader}>
          <span>코드</span>
          <span>이름</span>
        </div>
        <div className={styles.nameContainer}>
          {userInfo
            .filter(
              (user) =>
                user.NAME.includes(name) ||
                user.CODE.includes(name.toUpperCase())
            )
            .map((user) => (
              <div
                key={`${user.CODE}_${user.NAME}`}
                className={styles.nameArea}
                onClick={() => onClickUser(user)}
              >
                <span>{user.CODE}</span>
                <span>{user.NAME}</span>
              </div>
            ))}
        </div>
        <footer className={styles.footer}>
          <button onClick={onCloseModal}>close</button>
        </footer>
      </div>
    </div>
  );
}
