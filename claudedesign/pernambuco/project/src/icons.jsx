// ============ Ícones (stroke, 24x24) ============
const Icon = ({ name, size = 24, stroke = 2, ...rest }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
    ...rest,
  };
  switch (name) {
    case "truck": return (
      <svg {...props}><path d="M3 7h11v10H3z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
    );
    case "tag": return (
      <svg {...props}><path d="M20 12V5a1 1 0 0 0-1-1h-7L3 13l8 8 9-9z"/><circle cx="15" cy="9" r="1.2"/></svg>
    );
    case "layers": return (
      <svg {...props}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>
    );
    case "chat": return (
      <svg {...props}><path d="M21 12a8 8 0 1 1-3.1-6.3L21 5l-1 3.9A8 8 0 0 1 21 12z"/></svg>
    );
    case "foundation": return (
      <svg {...props}><path d="M3 20h18"/><path d="M5 20V9l7-4 7 4v11"/><path d="M9 20v-6h6v6"/></svg>
    );
    case "structure": return (
      <svg {...props}><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M3 15h18M9 4v16M15 4v16"/></svg>
    );
    case "water": return (
      <svg {...props}><path d="M12 3s6 6 6 11a6 6 0 1 1-12 0c0-5 6-11 6-11z"/></svg>
    );
    case "bolt": return (
      <svg {...props}><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>
    );
    case "brush": return (
      <svg {...props}><path d="M14 3l7 7-9 9H5v-7z"/><path d="M11 6l7 7"/></svg>
    );
    case "wrench": return (
      <svg {...props}><path d="M14.7 6.3a4 4 0 1 1 3 7L19 15l-1.5 1.5L8 7 6.5 5.5 8 4l1.7 1.3a4 4 0 0 1 5-.0z"/><path d="M7 16l-3 3 2 2 3-3"/></svg>
    );
    case "whatsapp": return (
      <svg {...props}><path d="M20 12a8 8 0 0 1-12 6.9L4 20l1.1-3.9A8 8 0 1 1 20 12z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1.1-.4 1.4-.8l-1.2-1.2c-.4.2-1 .3-1.4 0a4 4 0 0 1-2-2c-.3-.4-.2-1 0-1.4L10.1 8.4c-.4.3-.8.8-.8 1.4z"/></svg>
    );
    case "phone": return (
      <svg {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/></svg>
    );
    case "pin": return (
      <svg {...props}><path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
    );
    case "clock": return (
      <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    );
    case "mail": return (
      <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
    );
    case "search": return (
      <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
    );
    case "x": return (
      <svg {...props}><path d="M6 6l12 12M18 6l-12 12"/></svg>
    );
    case "menu": return (
      <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    );
    case "clipboard": return (
      <svg {...props}><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M9 11h6M9 15h4"/></svg>
    );
    case "users": return (
      <svg {...props}><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="7" r="2.5"/><path d="M15 14c3.3 0 6 2 6 5"/></svg>
    );
    case "arrow-right": return (
      <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    );
    case "arrow-up-right": return (
      <svg {...props}><path d="M7 17L17 7M8 7h9v9"/></svg>
    );
    case "check": return (
      <svg {...props}><path d="M5 12l4 4 10-10"/></svg>
    );
    case "star": return (
      <svg {...props}><path d="M12 3l2.9 6 6.6 1-4.8 4.6 1.2 6.6L12 18l-5.9 3.2L7.3 14.6 2.5 10l6.6-1z"/></svg>
    );
    case "instagram": return (
      <svg {...props}><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
    );
    case "facebook": return (
      <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    );
    default: return null;
  }
};

Object.assign(window, { Icon });
