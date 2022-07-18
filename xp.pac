// PaiBloxx Experimental

function FindProxyForURL(url, host) {
    const u = url.toLowerCase();
    const h = host.toLowerCase();

    if (shExpMatch(u, "*000webhost*") || shExpMatch(u, "*uploads*") || dnsDomainIs(h, "cypwn.xyz") || dnsDomainIs(h, "discord.com") || dnsDomainIs(h, "github.io") || false) {
        return "DIRECT";
    } else if (shExpMatch(u, " *hotjar*") || shExpMatch(u, "*admob*") || shExpMatch(u, "*ads*") || shExpMatch(u, "*advert*") || shExpMatch(u, "*analytic*") || shExpMatch(u, "*facebook*") || shExpMatch(u, "*logging*") || shExpMatch(u, "*luckyorange*") || shExpMatch(u, "a*s3.amazon*") || dnsDomainIs(h, "adjust.io") || dnsDomainIs(h, "amazonaax.com") || dnsDomainIs(h, "amazonclix.com") || dnsDomainIs(h, "app-measurement.com") || dnsDomainIs(h, "assoc-amazon.com") || dnsDomainIs(h, "bolt-gcdn.sc-cdn.net") || dnsDomainIs(h, "bugsnag.com") || dnsDomainIs(h, "data.ea.com") || dnsDomainIs(h, "doubleclick.net") || dnsDomainIs(h, "events.redditmedia.com") || dnsDomainIs(h, "fastclick.com") || dnsDomainIs(h, "fastclick.net") || dnsDomainIs(h, "flurry.com") || dnsDomainIs(h, "freshmarketer.com") || dnsDomainIs(h, "fundingchoicesmessages.google.com") || dnsDomainIs(h, "gcp.api.snapchat.com") || dnsDomainIs(h, "googlecode.com") || dnsDomainIs(h, "googlesyndication.com") || dnsDomainIs(h, "gtq6.sct.sc-prod.net") || dnsDomainIs(h, "imasdk.googleapis.com") || dnsDomainIs(h, "in.appcenter.ms") || dnsDomainIs(h, "media.net,") || false) {
        return "PROXY 0.0.0.0:53";
    } else {
        return "DIRECT";
    }
}