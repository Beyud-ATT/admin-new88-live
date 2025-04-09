const LOCK_REASON = {
  SPAM: {
    value: 1,
    label: "Spam nội dung không hợp lệ.",
  },
  BAD_CONTENT: { value: 2, label: "Lan truyền nội dung sai lệch." },
  OTHER: { value: 3, label: "Khác" },
};

const USER_TYPE = {
  IDOL: { value: 1, label: "Idol" },
  USER: { value: 2, label: "Người dùng" },
};

export { LOCK_REASON, USER_TYPE };
