
module.exports.gooddata = {
  "appStatusCode": 800,
  "uploadResult": {
    "fileName": "success.csv",
    "fileKey": "dccc7a50-8158-432c-86dd-55b1801e5137"
  },
  "generalResult": {
    "transformationResults": {
      "results": {
        "Result_EA_ID": {
          "id": "EA_ID",
          "value": "AB3002SQ"
        },
        "Result_Site_Name": {
          "id": "Site_Name",
          "value": "ABC Limited"
        },
        "Result_Rtn_Type": {
          "id": "Rtn_Type",
          "value": "EPR/IED self monitoring periodic Landfill Gas infrastructure monitoring return"
        }
      }
    },
    "resultCount": 3
  }
};


module.exports.baddata = {
  "appStatusCode": 801,
  "uploadResult": {
    "fileName": "failures.csv"
  },
  "validationResult": {
    "schemaErrors": {
      "lineErrors": {
        "Line_1": {
          "columnName": "Mon_Point",
          "errorValue": null,
          "inputLineNo": "33",
          "outputLineNo": "3",
          "errorDetail": {
            "errorLevel": "error",
            "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Point' must have no element [children], and the value must be valid.",
            "outputMessage": "The 'Mon_Point' is dodgy"
          }
        },
        "Line_2": {
          "columnName": "Parameter",
          "errorValue": null,
          "inputLineNo": "34",
          "outputLineNo": "3",
          "errorDetail": {
            "errorLevel": "error",
            "inputMessage": "cvc-complex-type.2.2: Element 'Parameter' must have no element [children], and the value must be valid.",
            "outputMessage": "The 'Parameter' is dodgy"
          }
        },
        "Line_3": {
          "columnName": "Value",
          "errorValue": null,
          "inputLineNo": "56",
          "outputLineNo": "4",
          "errorDetail": {
            "errorLevel": "error",
            "inputMessage": "cvc-complex-type.2.2: Element 'Value' must have no element [children], and the value must be valid.",
            "outputMessage": "<li>Correct your mistake</li><li>Dont do it again</li><li><a target='_blank' href='https://www.gov.uk/'>Link test</a></li>"
          }
        },
        "Line_4": {
          "columnName": "Unit",
          "errorValue": "Mzzzetres",
          "inputLineNo": "58",
          "outputLineNo": "4",
          "errorDetail": {
            "errorLevel": "error",
            "inputMessage": "cvc-complex-type.2.2: Element 'Unit' must have no element [children], and the value must be valid.",
            "outputMessage": "The 'Unit' is dodgy"
          }
        },
        "Line_6": {
          "columnName": "Rtn_Type",
          "errorValue": null,
          "inputLineNo": "6",
          "outputLineNo": "2",
          "errorDetail": {
            "errorLevel": "error",
            "inputMessage": "cvc-complex-type.2.2: Element 'Rtn_Type' must have no element [children], and the value must be valid.",
            "outputMessage": "The 'Rtn_Type' is dodgy"
        }
      },
      "Line_7": {
        "columnName": "Mon_Date",
        "errorValue": "20zzz15-08-05",
        "inputLineNo": "7",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Date' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'dateSt' value needs to be included in the format 'YYYY-MM-DD' eg 2015-10-31"
        }
      },
      "Line_8": {
        "columnName": "Mon_Point",
        "errorValue": null,
        "inputLineNo": "33",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Point' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Mon_Point' is dodgy"
        }
      },
      "Line_9": {
        "columnName": "Parameter",
        "errorValue": null,
        "inputLineNo": "34",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Parameter' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Parameter' is dodgy"
        }
      },
      "Line_10": {
        "columnName": "Value",
        "errorValue": null,
        "inputLineNo": "56",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Value' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Value' is dodgy"
        }
      },
      "Line_11": {
        "columnName": "Unit",
        "errorValue": "Mzzzetres",
        "inputLineNo": "58",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Unit' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Unit' is dodgy"
        }
      },
      "Line_12": {
        "columnName": "Rtn_Type",
        "errorValue": null,
        "inputLineNo": "6",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Rtn_Type' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Rtn_Type' is dodgy"
        }
      },
      "Line_13": {
        "columnName": "Mon_Date",
        "errorValue": "20zzz15-08-05",
        "inputLineNo": "7",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Date' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'dateSt' value needs to be included in the format 'YYYY-MM-DD' eg 2015-10-31"
        }
      }, "Line_14": {
        "columnName": "Mon_Point",
        "errorValue": null,
        "inputLineNo": "33",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Point' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Mon_Point' is dodgy"
        }
      },
      "Line_15": {
        "columnName": "Parameter",
        "errorValue": null,
        "inputLineNo": "34",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Parameter' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Parameter' is dodgy"
        }
      },
      "Line_16": {
        "columnName": "Value",
        "errorValue": null,
        "inputLineNo": "56",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Value' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Value' is dodgy"
        }
      },
      "Line_17": {
        "columnName": "Unit",
        "errorValue": "Mzzzetres",
        "inputLineNo": "58",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Unit' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Unit' is dodgy"
        }
      },
      "Line_18": {
        "columnName": "Rtn_Type",
        "errorValue": null,
        "inputLineNo": "6",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Rtn_Type' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Rtn_Type' is dodgy"
        }
      },
      "Line_19": {
        "columnName": "Mon_Date",
        "errorValue": "20zzz15-08-05",
        "inputLineNo": "7",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Date' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'dateSt' value needs to be included in the format 'YYYY-MM-DD' eg 2015-10-31"
        }
      }, "Line_20": {
        "columnName": "Mon_Point",
        "errorValue": null,
        "inputLineNo": "33",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Point' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Mon_Point' is dodgy"
        }
      },
      "Line_21": {
        "columnName": "Parameter",
        "errorValue": null,
        "inputLineNo": "34",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Parameter' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Parameter' is dodgy"
        }
      },
      "Line_22": {
        "columnName": "Value",
        "errorValue": null,
        "inputLineNo": "56",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Value' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Value' is dodgy"
        }
      },
      "Line_4": {
        "columnName": "Unit",
        "errorValue": "Mzzzetres",
        "inputLineNo": "58",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Unit' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Unit' is dodgy"
        }
      },
      "Line_23": {
        "columnName": "Rtn_Type",
        "errorValue": null,
        "inputLineNo": "6",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Rtn_Type' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Rtn_Type' is dodgy"
        }
      },
      "Line_24": {
        "columnName": "Mon_Date",
        "errorValue": "20zzz15-08-05",
        "inputLineNo": "7",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Date' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'dateSt' value needs to be included in the format 'YYYY-MM-DD' eg 2015-10-31"
        }
      },
      "Line_25": {
        "columnName": "Mon_Point",
        "errorValue": null,
        "inputLineNo": "33",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Point' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Mon_Point' is dodgy"
        }
      },
      "Line_26": {
        "columnName": "Parameter",
        "errorValue": null,
        "inputLineNo": "34",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Parameter' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Parameter' is dodgy"
        }
      },
      "Line_27": {
        "columnName": "Value",
        "errorValue": null,
        "inputLineNo": "56",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Value' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Value' is dodgy"
        }
      },
      "Line_28": {
        "columnName": "Unit",
        "errorValue": "Mzzzetres",
        "inputLineNo": "58",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Unit' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Unit' is dodgy"
        }
      },
      "Line_29": {
        "columnName": "Rtn_Type",
        "errorValue": null,
        "inputLineNo": "6",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Rtn_Type' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Rtn_Type' is dodgy"
        }
      },
      "Line_30": {
        "columnName": "Mon_Date",
        "errorValue": "20zzz15-08-05",
        "inputLineNo": "7",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Date' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'dateSt' value needs to be included in the format 'YYYY-MM-DD' eg 2015-10-31"
        }
      }, "Line_31": {
        "columnName": "Mon_Point",
        "errorValue": null,
        "inputLineNo": "33",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Point' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Mon_Point' is dodgy"
        }
      },
      "Line_32": {
        "columnName": "Parameter",
        "errorValue": null,
        "inputLineNo": "34",
        "outputLineNo": "3",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Parameter' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Parameter' is dodgy"
        }
      },
      "Line_33": {
        "columnName": "Value",
        "errorValue": null,
        "inputLineNo": "56",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Value' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Value' is dodgy"
        }
      },
      "Line_34": {
        "columnName": "Unit",
        "errorValue": "Mzzzetres",
        "inputLineNo": "58",
        "outputLineNo": "4",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Unit' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Unit' is dodgy"
        }
      },
      "Line_35": {
        "columnName": "Rtn_Type",
        "errorValue": null,
        "inputLineNo": "6",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Rtn_Type' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'Rtn_Type' is dodgy"
        }
      },
      "Line_36": {
        "columnName": "Mon_Date",
        "errorValue": "20zzz15-08-05",
        "inputLineNo": "7",
        "outputLineNo": "2",
        "errorDetail": {
          "errorLevel": "error",
          "inputMessage": "cvc-complex-type.2.2: Element 'Mon_Date' must have no element [children], and the value must be valid.",
          "outputMessage": "The 'dateSt' value needs to be included in the format 'YYYY-MM-DD' eg 2015-10-31"
        }
      }
    },
    "errorCount": 36
  }
}
};

 