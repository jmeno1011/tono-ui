import ReactDom from "react-dom"

interface ModalPortalProps {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  const element = document.getElementById("modal-root") as HTMLElement;
  return ReactDom.createPortal(children, element);
}

