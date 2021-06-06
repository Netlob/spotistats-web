import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/nl";

import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale(localStorage.getItem("lang") || navigator.language || process.env.VUE_APP_I18N_LOCALE || "en");
dayjs.extend(localizedFormat);

export default dayjs