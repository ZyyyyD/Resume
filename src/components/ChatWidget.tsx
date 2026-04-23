import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { C } from "../constants/colors";
import Chatbot from "./Chatbot";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <Chatbot onClose={() => setOpen(false)} />}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 50,
          width: "64px",
          height: "64px",
          background: `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`,
          borderRadius: "50%",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.bg,
          border: "none",
          cursor: "pointer",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
        }>
        {open ? <X size={26} /> : <MessageSquare size={26} />}
      </button>
    </>
  );
}
