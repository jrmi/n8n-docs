(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1862:function(a,t,e){"use strict";e.r(t);var s=e(26),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[a._v("#")]),a._v(" Database")]),a._v(" "),e("p",[a._v("By default, n8n uses SQLite to save credentials, past executions, and workflows. However,\nn8n also supports PostgresDB.")]),a._v(" "),e("h2",{attrs:{id:"shared-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shared-settings"}},[a._v("#")]),a._v(" Shared Settings")]),a._v(" "),e("p",[a._v("The following environment variables get used by all databases:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("DB_TABLE_PREFIX")]),a._v(" (default: '') - Prefix for table names")])]),a._v(" "),e("h2",{attrs:{id:"postgresdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresdb"}},[a._v("#")]),a._v(" PostgresDB")]),a._v(" "),e("p",[a._v("To use PostgresDB as the database, you can provide the following environment variables")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("DB_TYPE=postgresdb")])]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_DATABASE")]),a._v(" (default: 'n8n')")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_HOST")]),a._v(" (default: 'localhost')")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_PORT")]),a._v(" (default: 5432)")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_USER")]),a._v(" (default: 'root')")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_PASSWORD")]),a._v(" (default: empty)")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_SCHEMA")]),a._v(" (default: 'public')")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_SSL_CA")]),a._v(" (default: undefined) — a path to the server's CA certificate to use to validate the connection (opportunistic encryption is not supported)")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_SSL_CERT")]),a._v(" (default: undefined) — a path to the client's TLS certificate to authenticate with")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_SSL_KEY")]),a._v(" (default: undefined) — a path to the client's private key corresponding to the its certificate")]),a._v(" "),e("li",[e("code",[a._v("DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED")]),a._v(" (default: true) — if TLS connections that fail validation should be rejected")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgresdb\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_DATABASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgresdb\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5432")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_SCHEMA")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# optional:")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_SSL_CA")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/ca.crt\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n\nn8n start\n")])])]),e("h3",{attrs:{id:"tls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[a._v("#")]),a._v(" TLS")]),a._v(" "),e("p",[a._v("A note on TLS certificates — you can choose between these configurations:")]),a._v(" "),e("ul",[e("li",[a._v("not declaring (default) — in which case you'll connect with SSL=off")]),a._v(" "),e("li",[a._v("declaring only the CA + unauthorized flag — in which case you'll connect with SSL=on and verify the server's signature")]),a._v(" "),e("li",[a._v("declaring "),e("code",[a._v("_{CERT,KEY}")]),a._v(" as well as the above — in which case you'll use the cert and key for client TLS authentication")])]),a._v(" "),e("h2",{attrs:{id:"mysql-mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-mariadb"}},[a._v("#")]),a._v(" MySQL / MariaDB")]),a._v(" "),e("p",[a._v("The compatibility with MySQL/MariaDB has been tested. Even then, it is advisable to observe the operation of the application with this database as this option has been recently added. If you spot any problems, feel free to submit a burg report or a pull request.")]),a._v(" "),e("p",[a._v("To use MySQL as database you can provide the following environment variables:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("DB_TYPE=mysqldb")]),a._v(" or "),e("code",[a._v("DB_TYPE=mariadb")])]),a._v(" "),e("li",[e("code",[a._v("DB_MYSQLDB_DATABASE")]),a._v(" (default: 'n8n')")]),a._v(" "),e("li",[e("code",[a._v("DB_MYSQLDB_HOST")]),a._v(" (default: 'localhost')")]),a._v(" "),e("li",[e("code",[a._v("DB_MYSQLDB_PORT")]),a._v(" (default: 3306)")]),a._v(" "),e("li",[e("code",[a._v("DB_MYSQLDB_USER")]),a._v(" (default: 'root')")]),a._v(" "),e("li",[e("code",[a._v("DB_MYSQLDB_PASSWORD")]),a._v(" (default: empty)")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysqldb\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_DATABASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysqldb\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_PORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_MYSQLDB_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("n8n\n\nn8n start\n")])])]),e("h2",{attrs:{id:"sqlite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[a._v("#")]),a._v(" SQLite")]),a._v(" "),e("p",[a._v("This is the default database that gets used if nothing is defined.")]),a._v(" "),e("p",[a._v("The database file is located at:\n"),e("code",[a._v("~/.n8n/database.sqlite")])]),a._v(" "),e("h2",{attrs:{id:"other-databases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-databases"}},[a._v("#")]),a._v(" Other Databases")]),a._v(" "),e("p",[a._v("Currently, only the databases mentioned above are supported. n8n internally uses\n"),e("a",{attrs:{href:"https://typeorm.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("TypeORM"),e("OutboundLink")],1),a._v(", so adding support for the following databases\nshould not be too much work:")]),a._v(" "),e("ul",[e("li",[a._v("CockroachDB")]),a._v(" "),e("li",[a._v("Microsoft SQL")]),a._v(" "),e("li",[a._v("Oracle")])]),a._v(" "),e("p",[a._v("If you cannot use any of the currently supported databases for some reason and\nyou can code, we'd appreciate your support in the form of a pull request. If not, you can request\nfor support here:")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://community.n8n.io/c/feature-requests/cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://community.n8n.io/c/feature-requests/cli"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);