function region(code) {
    return code ? `/region/${code}` : "";
}

exports.region = region;