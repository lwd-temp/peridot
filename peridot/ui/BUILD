load("//rules_byc:defs.bzl", "BYCDEPLOY_OUTS_BASE", "byc_frontend", "container", "peridot_k8s")

package(default_visibility = ["//visibility:public"])

server_deps = [
    "//common/frontend_server",
    "//hydra/pkg/hydra:hydrajs",
]

server_entrypoint = "server/index.mjs"

server_srcs = glob(["server/**/*.mjs"])

byc_frontend(
    name = "peridot",
    srcs = glob([
        "src/**/*.tsx",
        "src/**/*.ts",
    ]),
    entrypoint = "peridot/ui/src/entrypoint.tsx",
    index_html = "//rules_byc/internal/byc_bundle:index_no_mobile.hbs",
    server_deps = server_deps,
    server_entrypoint = server_entrypoint,
    server_srcs = server_srcs,
    title = "Peridot Build",
    deps = [
        "//common/mui",
        "//common/ui",
        "//dotui",
        "//peridot/proto/v1:client_typescript",
        "//tailwind:css",
        "@npm//@mui/icons-material",
        "@npm//@mui/lab",
        "@npm//@mui/x-data-grid",
        "@npm//await-to-js",
        "@npm//immutable",
        "@npm//react-lazylog",
        "@npm//react-router",
        "@npm//react-router-dom",
    ],
)

container(
    base = "//bases/bazel/node",
    files = [
        ":peridot.bundle",
    ],
    frontend = True,
    image_name = "peridot-frontend",
    server_entrypoint = server_entrypoint,
    server_files = server_srcs + server_deps,
)

peridot_k8s(
    name = "peridot-frontend",
    src = "deploy.jsonnet",
    outs = BYCDEPLOY_OUTS_BASE,
    deps = ["//ci"],
)