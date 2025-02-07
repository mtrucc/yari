/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v8.1.1. DO NOT EDIT. DO NOT COMMIT.

import UrlMetricType from "@mozilla/glean/private/metrics/url";
import StringMetricType from "@mozilla/glean/private/metrics/string";

/**
 * The HTTP status code of the page.
 *
 * Generated from `page.http_status`.
 */
export const httpStatus = new StringMetricType({
  category: "page",
  name: "http_status",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The Baseline status of the page:
 * null: the page has no baseline status
 * "baseline": the page is baseline
 * "not_baseline" the page is not baseline
 *
 * Generated from `page.is_baseline`.
 */
export const isBaseline = new StringMetricType({
  category: "page",
  name: "is_baseline",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The URL path of the page that was viewed.
 *
 * Generated from `page.path`.
 */
export const path = new UrlMetricType({
  category: "page",
  name: "path",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The referring URL that linked to the page that was viewed.
 *
 * Generated from `page.referrer`.
 */
export const referrer = new UrlMetricType({
  category: "page",
  name: "referrer",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});
