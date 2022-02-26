import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

export function fromNow(date) {
  return dayjs(date).fromNow();
}

export function sortByCreatedAtASC(a, b) {
  return b.createdAt - a.createdAt;
}
