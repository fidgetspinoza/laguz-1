{
    "id": "import",
    "adoType": "app",
    "name": "Import Template",
    "icon": "/app-templates/icons/blank.png",
    "description": "Import .flex file",
    "opts": [
        "Import saved template",
        "Add on your prefered modules",
        "Save as a template",
        "Publish and use!"
    ],
    "ados": [
        {
            "id": "publish-settings",
            "path": "publish-settings",
            "required": true,
            "enabled": true
        },
        {
            "id": "laguz-1-721",
            "path": "cw721/0.1.0/cw721",
            "required": true,
            "enabled": true
        },
        {
            "id": "laguz-1-primitive",
            "path": "primitive/0.1.0/primitive",
            "required": true,
            "enabled": true
        },
        {
            "id": "laguz-1-bid",
            "path": "cw721-bids/0.1.0/cw721-bids",
            "required": true,
            "enabled": true
        },
        {
            "id": "laguz-1-bidders",
            "path": "address-list/0.1.0/address-list",
            "required": true,
            "enabled": true
        },
        {
            "id": "laguz-1-holders",
            "path": "address-list/0.1.0/address-list",
            "required": true,
            "enabled": true
        }
    ],
    "modules": [],
    "formData": {
        "publish-settings": {
            "$type": "publish-settings",
            "$class": "system",
            "$classifier": "",
            "$enabled": true,
            "$removable": false,
            "name": "laguz-1"
        },
        "laguz-1-721": {
            "minter": {
                "identifier": "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn"
            },
            "modules": [],
            "$type": "cw721",
            "$class": "baseADO",
            "$classifier": "collectible",
            "$enabled": true,
            "$removable": true,
            "name": "laguz-1",
            "symbol": "LAGUZ1"
        },
        "laguz-1-primitive": {
            "$type": "primitive",
            "$class": "primitive",
            "$classifier": "",
            "$enabled": true,
            "$removable": true
        },
        "laguz-1-bid": {
            "$type": "cw721-bids",
            "$class": "baseADO",
            "$classifier": "sale",
            "$enabled": true,
            "$removable": true,
            "andromeda_cw721_contract": "laguz-1-721",
            "valid_denom": "uandr"
        },
        "laguz-1-bidders": {
            "$type": "address-list",
            "$class": "module",
            "$classifier": "address",
            "$enabled": true,
            "$removable": true,
            "is_inclusive": true
        },
        "laguz-1-holders": {
            "$type": "address-list",
            "$class": "module",
            "$classifier": "address",
            "$enabled": true,
            "$removable": true,
            "is_inclusive": true
        }
    }
}