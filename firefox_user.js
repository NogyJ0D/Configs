// user_pref();

// Misc
user_pref('browser.tabs.loadDivertedInBackground', true);
user_pref('toolkit.tabbox.switchByScrolling', true);

// Telemetría
user_pref('devtools.onboarding.telemetry.logged', false);
user_pref('toolkit.telemetry.updatePing.enabled', false);
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.telemetry', false);
user_pref('browser.ping-centre.telemetry', false);
user_pref('toolkit.telemetry.bhrPing.enabled', false);
user_pref('toolkit.telemetry.enabled', false);
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false);
user_pref('toolkit.telemetry.hybridContent.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false);
user_pref('toolkit.telemetry.reportingpolicy.firstRun', false);
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false);
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.updatePing.enabled', false);
user_pref('toolkit.telemetry.reportingpolicy.firstRun', false);
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('devtools.onboarding.telemetry.logged', false);
user_pref('toolkit.telemetry.bhrPing.enabled', false);
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.sessions.current.clean', true);
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.sessions.current.clean', true);

// Extras

// ---- FASTFOX ----
// DISK CACHE
user_pref('browser.cache.disk.enable', false);
/** MEDIA CACHE ***/
user_pref('media.memory_cache_max_size', 65536);
user_pref('media.cache_readahead_limit', 7200);
user_pref('media.cache_resume_threshold', 3600);
// IMAGE CACHE
user_pref('image.mem.decode_bytes_at_a_time', 32768);
// NETWORK
user_pref('network.http.max-connections', 1800);
user_pref('network.http.max-persistent-connections-per-server', 10);
user_pref('network.http.max-urgent-start-excessive-connections-per-host', 5);
user_pref('network.http.pacing.requests.enabled', false);
user_pref('network.dnsCacheExpiration', 3600);
user_pref('network.ssl_tokens_cache_capacity', 10240);

// ---- SECUREFOX ----
// TRACKING PROTECTION
user_pref('browser.contentblocking.category', 'strict');
user_pref('browser.download.start_downloads_in_tmp_dir', true);
user_pref('browser.helperApps.deleteTempFileOnExit', true);
user_pref('browser.uitour.enabled', false);
user_pref('privacy.globalprivacycontrol.enabled', true);
// PASSWORDS
user_pref('signon.formlessCapture.enabled', false);
user_pref('signon.privateBrowsingCapture.enabled', false);
user_pref('network.auth.subresource-http-auth-allow', 1);
user_pref('editor.truncate_user_pastes', false);
// TELEMETRY
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.enabled', false);
user_pref('toolkit.telemetry.server', 'data:,');
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false);
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false);
user_pref('toolkit.telemetry.updatePing.enabled', false);
user_pref('toolkit.telemetry.bhrPing.enabled', false);
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false);
user_pref('toolkit.telemetry.coverage.opt-out', true);
user_pref('toolkit.coverage.opt-out', true);
user_pref('toolkit.coverage.endpoint.base', '');
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.telemetry', false);

// ---- PESKYFOX ----
// MOZILLA UI
user_pref('browser.privatebrowsing.vpnpromourl', '');
user_pref('extensions.getAddons.showPane', false);
user_pref('extensions.htmlaboutaddons.recommendations.enabled', false);
user_pref('browser.discovery.enabled', false);
user_pref('browser.shell.checkDefaultBrowser', false);
user_pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons', false);
user_pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features', false);
user_pref('browser.preferences.moreFromMozilla', false);
user_pref('browser.aboutConfig.showWarning', false);
user_pref('browser.aboutwelcome.enabled', false);
user_pref('browser.profiles.enabled', true);
// THEME ADJUSTMENTS
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
user_pref('browser.compactmode.show', true);
user_pref('browser.privateWindowSeparation.enabled', false);
// NEW TAB PAGE
user_pref('browser.newtabpage.activity-stream.default.sites', '');
user_pref('browser.newtabpage.activity-stream.showSponsoredTopSites', false);
user_pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);
user_pref('browser.newtabpage.activity-stream.showSponsored', false);
// POCKET
user_pref('extensions.pocket.enabled', false);
