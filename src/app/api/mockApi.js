import { delay } from "../common/utils/util";
import { sampleData } from "./sampleData";

export function fetchSampleData() {
  return delay(5000).then(function () {
    return Promise.resolve(sampleData);
  });
}
