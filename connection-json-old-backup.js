{
  "reportConfig": {
    "serverLocation": "https://my.galileosuite.com",
    "customer": "pc_connection",
    "t": "6caed3cdf5928f34a51c04783448d58eae10ae57d9fd3b7a51709023e382660e"
  },
  "payloads": {
    "template_storage_config_details_tablePayload": {
      "id": "StorageAssetsTable",
      "range_type": "last_week"
    },
    "template_svc_total_capacityPayload": {
      "id": "svc_total_capacity",
      "range_type": "last_week"
    },
    "template_svc_virt_capacityPayload": {
      "id": "svc_virt_capacity",
      "range_type": "last_week"
    },
    "template_svc_eff_capacityPayload": {
      "id": "svc_eff_capacity",
      "range_type": "last_week"
    },
    "template_vnxarray_raw_capacityPayload": {
      "id": "vnxarray_raw_capacity",
      "range_type": "last_week"
    },
    "template_vnxarray_user_capacityPayload": {
      "id": "vnxarray_user_capacity",
      "range_type": "last_week"
    },
    "stg_capacity_MarlboroughPayload": {
      "id": "storage_capacity_by_used_free",
      "tag": "Storage by DC:Marlborough",
      "range_type": "last_week"
    },
    "stg_capacity_AlpharettaPayload": {
      "id": "storage_capacity_by_used_free",
      "tag": "Storage by DC:Alpharetta",
      "range_type": "last_week"
    },
    "stg_capacity_MerrimackPayload": {
      "id": "storage_capacity_by_used_free",
      "tag": "Storage by DC:Merrimack",
      "range_type": "last_week"
    },
    "Marlborough_storage_capacity_by_used_free" : {
          "id": "storage_capacity_by_used_free",
          "tag": "Storage by DC:Marlborough",
          "range_type": "last_week"
    },
    "Marlborough_storage_capacity_by_type" : {
          "id": "storage_capacity_by_type",
          "tag": "Storage by DC:Marlborough"
    }
  },
  "styles": {
    "template_svc_total_capacityStyle": {
      "title": {
        "text": "Cluster Capacity",
        "margin": 10
      },
      "series": [
        {
          "data": [
            {
              "color": "#7b2d8b"
            },
            {
              "color": "#d7b0de"
            }
          ]
        }
      ],
      "chart": {
        "type": "pie",
        "height": 200,
        "margin": [
          20,
          0,
          0,
          0
        ],
        "backgroundColor": "transparent"
      },
      "legend": {
        "squareSymbol": false,
        "symbolHeight": 11,
        "symbolWidth": 5,
        "symbolRadius": 0,
        "itemMarginTop": 4,
        "itemStyle": {
          "fontweight": "lighter",
          "fontSize": "11px"
        },
        "labelFormat": "{name}: {y_pretty}"
      },
      "plotOptions": {
        "pie": {
          "innerSize": "65%",
          "size": 125,
          "startAngle": -90,
          "endAngle": 90,
          "showInLegend": true,
          "dataLabels": {
            "enabled": false
          }
        }
      }
    },
    "template_svc_virt_capacityStyle": {
      "title": {
        "text": "Overall Capacity",
        "margin": 10
      },
      "series": [
        {
          "data": [
            {
              "color": "#7b2d8b"
            },
            {
              "color": "#d7b0de"
            },
            {
              "color": "#f7b857"
            }
          ]
        }
      ],
      "chart": {
        "type": "pie",
        "height": 200,
        "margin": [
          20,
          0,
          0,
          0
        ],
        "backgroundColor": "transparent"
      },
      "legend": {
        "squareSymbol": false,
        "symbolHeight": 11,
        "symbolWidth": 5,
        "symbolRadius": 0,
        "itemMarginTop": 4,
        "itemStyle": {
          "fontweight": "lighter",
          "fontSize": "11px"
        },
        "labelFormat": "{name}: {y_pretty}"
      },
      "plotOptions": {
        "pie": {
          "innerSize": "65%",
          "size": 125,
          "startAngle": -90,
          "endAngle": 90,
          "showInLegend": true,
          "dataLabels": {
            "enabled": false
          }
        }
      }
    },
    "template_svc_eff_capacityStyle": {
      "title": {
        "text": "Storage Efficiency",
        "margin": 10
      },
      "series": [
        {
          "data": [
            {
              "color": "#7b2d8b"
            },
            {
              "name": "Comp Savings",
              "color": "#15c21f"
            },
            {
              "color": "#087510"
            }
          ]
        }
      ],
      "chart": {
        "type": "pie",
        "height": 200,
        "margin": [
          20,
          0,
          0,
          0
        ],
        "backgroundColor": "transparent"
      },
      "legend": {
        "squareSymbol": false,
        "symbolHeight": 11,
        "symbolWidth": 5,
        "symbolRadius": 0,
        "itemMarginTop": 4,
        "itemStyle": {
          "fontweight": "lighter",
          "fontSize": "11px"
        },
        "labelFormat": "{name}: {y_pretty}"
      },
      "plotOptions": {
        "pie": {
          "innerSize": "65%",
          "size": 125,
          "startAngle": -90,
          "endAngle": 90,
          "showInLegend": true,
          "dataLabels": {
            "enabled": false
          }
        }
      }
    },
    "template_vnxarray_raw_capacityStyle": {
      "title": {
        "text": "Raw Capacity",
        "margin": 10
      },
      "series": [
        {
          "data": [
            {
              "color": "#7b2d8b"
            },
            {
              "color": "#d7b0de"
            }
          ]
        }
      ],
      "chart": {
        "type": "pie",
        "height": 200,
        "margin": [
          20,
          0,
          0,
          0
        ],
        "backgroundColor": "transparent"
      },
      "legend": {
        "squareSymbol": false,
        "symbolHeight": 11,
        "symbolWidth": 5,
        "symbolRadius": 0,
        "itemMarginTop": 4,
        "itemStyle": {
          "fontweight": "lighter",
          "fontSize": "11px"
        },
        "labelFormat": "{name}: {y_pretty}"
      },
      "plotOptions": {
        "pie": {
          "innerSize": "65%",
          "size": 125,
          "startAngle": -90,
          "endAngle": 90,
          "showInLegend": true,
          "dataLabels": {
            "enabled": false
          }
        }
      }
    },
    "template_vnxarray_user_capacityStyle": {
      "title": {
        "text": "User Capacity",
        "margin": 10
      },
      "series": [
        {
          "data": [
            {
              "color": "#7b2d8b"
            },
            {
              "color": "#3e1646"
            },
            {
              "color": "#d7b0de"
            },
            {
              "color": "#f7b857"
            }
          ]
        }
      ],
      "chart": {
        "type": "pie",
        "height": 200,
        "margin": [
          20,
          0,
          0,
          0
        ],
        "backgroundColor": "transparent"
      },
      "legend": {
        "squareSymbol": false,
        "symbolHeight": 11,
        "symbolWidth": 5,
        "symbolRadius": 0,
        "itemMarginTop": 4,
        "itemStyle": {
          "fontweight": "lighter",
          "fontSize": "11px"
        },
        "labelFormat": "{name}: {y_pretty}"
      },
      "plotOptions": {
        "pie": {
          "innerSize": "65%",
          "size": 125,
          "startAngle": -90,
          "endAngle": 90,
          "showInLegend": true,
          "dataLabels": {
            "enabled": false
          }
        }
      }
    },
    "storage_capacity_by_used_free_style" : {
            "title": {
              "text": "Storage Used/Free",
              "margin": 10
            },
            "chart": {
              "type": "pie",
              "height": 275,
              "margin": [
                20,
                0,
                0,
                0
              ],
              "backgroundColor": "transparent"
            },
            "plotOptions": {
              "series": {
                "animation": false
              },
              "pie": {
                "borderWidth": 1,
                "innerSize": "55%",
                "size": 125,
                "showInLegend": false,
                "dataLabels": {
                  "enabled": true,
                  "padding": 2,
                  "distance": 20,
                  "format": "{point.name}: {point.y_pretty}<br/>({point.percentage:.0f}%)"
                }
              }
            }
          }
  },
  "elements": {
    "template_storage_config_details_table": {
      "selected_cols": [
        "Name",
        "Vendor",
        "Model",
        "Serial Number",
        "Code Level"
      ],
      "payloadKey": "template_storage_config_details_tablePayload"
    },
    "template_storage_capacity_details_table": {
      "selected_cols": [
        "Name",
        "Device Type",
        "Managed Capacity",
        "Used Capacity",
        "Free Capacity",
        "% Free Space"
      ],
      "payloadKey": "template_storage_config_details_tablePayload"
    },
    "template_svc_total_capacity": {
      "show_zeros": true,
      "disable_galileo_defaults": true,
      "payloadKey": "template_svc_total_capacityPayload",
      "styleKey": "template_svc_total_capacityStyle"
    },
    "template_svc_virt_capacity": {
      "show_zeros": true,
      "disable_galileo_defaults": true,
      "payloadKey": "template_svc_virt_capacityPayload",
      "styleKey": "template_svc_virt_capacityStyle"
    },
    "template_svc_eff_capacity": {
      "show_zeros": true,
      "disable_galileo_defaults": true,
      "payloadKey": "template_svc_eff_capacityPayload",
      "styleKey": "template_svc_eff_capacityStyle"
    },
    "template_vnxarray_raw_capacity": {
      "show_zeros": true,
      "disable_galileo_defaults": true,
      "payloadKey": "template_vnxarray_raw_capacityPayload",
      "styleKey": "template_vnxarray_raw_capacityStyle"
    },
    "template_vnxarray_user_capacity": {
      "show_zeros": true,
      "disable_galileo_defaults": true,
      "payloadKey": "template_vnxarray_user_capacityPayload",
      "styleKey": "template_vnxarray_user_capacityStyle"
    },
    "stg_capacity_Marlborough": {
      "payloadKey": "stg_capacity_MarlboroughPayload"
    },
    "stg_capacity_Alpharetta": {
      "payloadKey": "stg_capacity_AlpharettaPayload"
    },
    "stg_capacity_Merrimack": {
      "payloadKey": "stg_capacity_MerrimackPayload"
    },
    "dataCenters": {
      "Marlborough": {
        "storage_capacity_by_used_free": {
          "legend_sort": "value",
          "disable_galileo_defaults": true,
          "styleKey" : "storage_capacity_by_used_free_style"
        },
        "storage_capacity_by_type": {
          "inherits": [
            "template_sm_donut_legend"
          ],
          "id": "storage_capacity_by_type",
          "tag": "Storage by DC:Marlborough",
          "options": {
            "title": {
              "text": "Capacity by Type",
              "margin": 10
            },
            "chart": {
              "type": "pie",
              "height": 275,
              "margin": [
                20,
                0,
                0,
                0
              ],
              "backgroundColor": "transparent"
            },
            "plotOptions": {
              "series": {
                "animation": false
              },
              "pie": {
                "borderWidth": 1,
                "innerSize": "55%",
                "size": 125,
                "showInLegend": false,
                "dataLabels": {
                  "enabled": true,
                  "padding": 2,
                  "distance": 20,
                  "format": "{point.name}: {point.y_pretty}<br/>({point.percentage:.0f}%)"
                }
              }
            }
          },
          "range": "last_week",
          "legend_sort": "value",
          "disable_galileo_defaults": true
        },
        "storage_config_details_table": {
          "inherits": [
            "template_storage_config_details_table"
          ],
          "tag": "Storage by DC:Marlborough",
          "id": "StorageAssetsTable",
          "range": "last_week",
          "selected_cols": [
            "Name",
            "Vendor",
            "Model",
            "Serial Number",
            "Code Level"
          ]
        },
        "storage_capacity_details_table": {
          "inherits": [
            "template_storage_capacity_details_table"
          ],
          "tag": "Storage by DC:Marlborough",
          "id": "StorageAssetsTable",
          "range": "last_week",
          "selected_cols": [
            "Name",
            "Device Type",
            "Managed Capacity",
            "Used Capacity",
            "Free Capacity",
            "% Free Space"
          ]
        },
        "storageMetrics": {
          "TPMHSVC01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "34471",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            "asset": "34471",
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "34471",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [20, 0, 0, 0],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "34471",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [20, 0, 0, 0],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "34471",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],                 
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "34471",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "34471",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "TPMHV5K01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "35425",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [20, 0, 0, 0],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "35425",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "35425",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "35425",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "35425",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "35425",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "TPMHV7K01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "34626",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "34626",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "34626",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "34626",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "34626",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "34626",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "TPMHFS72K01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "97757",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "97757",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "97757",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "97757",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "97757",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "97757",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "isParent": true
        }
      },
      "Merrimack": {
        "storage_capacity_by_used_free": {
          "inherits": [
            "template_sm_donut_legend"
          ],
          "id": "storage_capacity_by_used_free",
          "tag": "Storage by DC:Merrimack",
          "options": {
            "title": {
              "text": "Storage Used/Free",
              "margin": 10
            },
            "chart": {
              "type": "pie",
              "height": 275,
              "margin": [
                20,
                0,
                0,
                0
              ],
              "backgroundColor": "transparent"
            },
            "plotOptions": {
              "series": {
                "animation": false
              },
              "pie": {
                "borderWidth": 1,
                "innerSize": "55%",
                "size": 125,
                "showInLegend": false,
                "dataLabels": {
                  "enabled": true,
                  "padding": 2,
                  "distance": 20,
                  "format": "{point.name}: {point.y_pretty}<br/>({point.percentage:.0f}%)"
                }
              }
            }
          },
          "range": "last_week",
          "legend_sort": "value",
          "disable_galileo_defaults": true
        },
        "storage_capacity_by_type": {
          "inherits": [
            "template_sm_donut_legend"
          ],
          "id": "storage_capacity_by_type",
          "tag": "Storage by DC:Merrimack",
          "options": {
            "title": {
              "text": "Capacity by Type",
              "margin": 10
            },
            "chart": {
              "type": "pie",
              "height": 275,
              "margin": [
                20,
                0,
                0,
                0
              ],
              "backgroundColor": "transparent"
            },
            "plotOptions": {
              "series": {
                "animation": false
              },
              "pie": {
                "borderWidth": 1,
                "innerSize": "55%",
                "size": 125,
                "showInLegend": false,
                "dataLabels": {
                  "enabled": true,
                  "padding": 2,
                  "distance": 20,
                  "format": "{point.name}: {point.y_pretty}<br/>({point.percentage:.0f}%)"
                }
              }
            }
          },
          "range": "last_week",
          "legend_sort": "value",
          "disable_galileo_defaults": true
        },
        "storage_config_details_table": {
          "inherits": [
            "template_storage_config_details_table"
          ],
          "tag": "Storage by DC:Merrimack",
          "id": "StorageAssetsTable",
          "range": "last_week",
          "selected_cols": [
            "Name",
            "Vendor",
            "Model",
            "Serial Number",
            "Code Level"
          ]
        },
        "storage_capacity_details_table": {
          "inherits": [
            "template_storage_capacity_details_table"
          ],
          "tag": "Storage by DC:Merrimack",
          "id": "StorageAssetsTable",
          "range": "last_week",
          "selected_cols": [
            "Name",
            "Device Type",
            "Managed Capacity",
            "Used Capacity",
            "Free Capacity",
            "% Free Space"
          ]
        },
        "storageMetrics": {
          "MKV7K01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "44107",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "44107",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "44107",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "44107",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "44107",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "44107",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "MKSVC01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "35139",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "35139",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "35139",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "35139",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "35139",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "35139",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "MKSVC02": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "358",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "358",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "358",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "358",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "358",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "358",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "MKFS72K01": {
            "capacity_donut_1": {
              "inherits": [
                "template_svc_total_capacity"
              ],
              "asset": "97031",
              "id": "svc_total_capacity",
              "options": {
                "title": {
                  "text": "Cluster Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_svc_virt_capacity"
              ],
              "asset": "97031",
              "id": "svc_virt_capacity",
              "options": {
                "title": {
                  "text": "Overall Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_3": {
              "inherits": [
                "template_svc_eff_capacity"
              ],
              "asset": "97031",
              "id": "svc_eff_capacity",
              "options": {
                "title": {
                  "text": "Storage Efficiency",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "name": "Comp Savings",
                        "color": "#15c21f"
                      },
                      {
                        "color": "#087510"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskThroughput",
              "range": "last_week",
              "asset": "97031",
              "options": {
                "title": {
                  "text": "Cluster Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterDiskServiceTime",
              "range": "last_week",
              "asset": "97031",
              "options": {
                "title": {
                  "text": "Cluster Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "StorageClusterVirtualCapacity",
              "range": "last_129600",
              "asset": "97031",
              "options": {
                "title": {
                  "text": "Cluster Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "isParent": true
        },
        "isParent": true
      },
      "Alpharetta": {
        "storage_capacity_by_used_free": {
          "inherits": [
            "template_sm_donut_legend"
          ],
          "id": "storage_capacity_by_used_free",
          "tag": "Storage by DC:Alpharetta",
          "options": {
            "title": {
              "text": "Storage Used/Free",
              "margin": 10
            },
            "chart": {
              "type": "pie",
              "height": 275,
              "margin": [
                20,
                0,
                0,
                0
              ],
              "backgroundColor": "transparent"
            },
            "plotOptions": {
              "series": {
                "animation": false
              },
              "pie": {
                "borderWidth": 1,
                "innerSize": "55%",
                "size": 125,
                "showInLegend": false,
                "dataLabels": {
                  "enabled": true,
                  "padding": 2,
                  "distance": 20,
                  "format": "{point.name}: {point.y_pretty}<br/>({point.percentage:.0f}%)"
                }
              }
            }
          },
          "range": "last_week",
          "legend_sort": "value",
          "disable_galileo_defaults": true
        },
        "storage_capacity_by_type": {
          "inherits": [
            "template_sm_donut_legend"
          ],
          "id": "storage_capacity_by_type",
          "tag": "Storage by DC:Alpharetta",
          "options": {
            "title": {
              "text": "Capacity by Type",
              "margin": 10
            },
            "chart": {
              "type": "pie",
              "height": 275,
              "margin": [
                20,
                0,
                0,
                0
              ],
              "backgroundColor": "transparent"
            },
            "plotOptions": {
              "series": {
                "animation": false
              },
              "pie": {
                "borderWidth": 1,
                "innerSize": "55%",
                "size": 125,
                "showInLegend": false,
                "dataLabels": {
                  "enabled": true,
                  "padding": 2,
                  "distance": 20,
                  "format": "{point.name}: {point.y_pretty}<br/>({point.percentage:.0f}%)"
                }
              }
            }
          },
          "range": "last_week",
          "legend_sort": "value",
          "disable_galileo_defaults": true
        },
        "storage_config_details_table": {
          "inherits": [
            "template_storage_config_details_table"
          ],
          "tag": "Storage by DC:Alpharetta",
          "id": "StorageAssetsTable",
          "range": "last_week",
          "selected_cols": [
            "Name",
            "Vendor",
            "Model",
            "Serial Number",
            "Code Level"
          ]
        },
        "storage_capacity_details_table": {
          "inherits": [
            "template_storage_capacity_details_table"
          ],
          "tag": "Storage by DC:Alpharetta",
          "id": "StorageAssetsTable",
          "range": "last_week",
          "selected_cols": [
            "Name",
            "Device Type",
            "Managed Capacity",
            "Used Capacity",
            "Free Capacity",
            "% Free Space"
          ]
        },
        "storageMetrics": {
          "APM00123804329": {
            "capacity_donut_1": {
              "inherits": [
                "template_vnxarray_raw_capacity"
              ],
              "asset": "48089",
              "id": "vnxarray_raw_capacity",
              "options": {
                "title": {
                  "text": "Raw Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_vnxarray_user_capacity"
              ],
              "asset": "48089",
              "id": "vnxarray_user_capacity",
              "options": {
                "title": {
                  "text": "User Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#3e1646"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "GROUP_vnxarray_CHART_VnxarrayThroughput",
              "range": "last_week",
              "asset": "48089",
              "options": {
                "title": {
                  "text": "Array Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "GROUP_vnxarray_CHART_VnxarrayLunTotalServiceTime",
              "range": "last_week",
              "asset": "48089",
              "options": {
                "title": {
                  "text": "Total Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "Capacity_CHART_VnxarrayUserCapacity",
              "range": "last_129600",
              "asset": "48089",
              "options": {
                "title": {
                  "text": "Array User Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "APM00161015959": {
            "capacity_donut_1": {
              "inherits": [
                "template_vnxarray_raw_capacity"
              ],
              "asset": "48299",
              "id": "vnxarray_raw_capacity",
              "options": {
                "title": {
                  "text": "Raw Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#d7b0de"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "capacity_donut_2": {
              "inherits": [
                "template_vnxarray_user_capacity"
              ],
              "asset": "48299",
              "id": "vnxarray_user_capacity",
              "options": {
                "title": {
                  "text": "User Capacity",
                  "margin": 10
                },
                "series": [
                  {
                    "data": [
                      {
                        "color": "#7b2d8b"
                      },
                      {
                        "color": "#3e1646"
                      },
                      {
                        "color": "#d7b0de"
                      },
                      {
                        "color": "#f7b857"
                      }
                    ]
                  }
                ],
                "chart": {
                  "type": "pie",
                  "height": 200,
                  "margin": [
                    20,
                    0,
                    0,
                    0
                  ],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 4,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  },
                  "labelFormat": "{name}: {y_pretty}"
                },
                "plotOptions": {
                  "pie": {
                    "innerSize": "65%",
                    "size": 125,
                    "startAngle": -90,
                    "endAngle": 90,
                    "showInLegend": true,
                    "dataLabels": {
                      "enabled": false
                    }
                  }
                }
              },
              "show_zeros": true,
              "range": "last_week",
              "disable_galileo_defaults": true
            },
            "storage_throughput": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "GROUP_vnxarray_CHART_VnxarrayThroughput",
              "range": "last_week",
              "asset": "48299",
              "options": {
                "title": {
                  "text": "Array Throughput - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_servicetimes": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "GROUP_vnxarray_CHART_VnxarrayLunTotalServiceTime",
              "range": "last_week",
              "asset": "48299",
              "options": {
                "title": {
                  "text": "Total Service Times - Last Week",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "storage_capacity": {
              "inherits": [
                "template_time_chart"
              ],
              "id": "Capacity_CHART_VnxarrayUserCapacity",
              "range": "last_129600",
              "asset": "48299",
              "options": {
                "title": {
                  "text": "Array User Capacity - Last 90 Days",
                  "align": "left",
                  "style": {
                    "fontSize": 18
                  }
                },
                "chart": {
                  "height": 240,
                  "margin": [60,0,70,70],
                  "backgroundColor": "transparent"
                },
                "legend": {
                  "squareSymbol": false,
                  "symbolHeight": 11,
                  "symbolWidth": 5,
                  "symbolRadius": 0,
                  "itemMarginTop": 6,
                  "itemStyle": {
                    "fontweight": "lighter",
                    "fontSize": "11px"
                  }
                },
                "plotOptions": {
                  "series": {
                    "marker": {
                      "enabled": false
                    }
                  }
                }
              },
              "legend_sort": "name",
              "legend_sort_reverse": true,
              "disable_galileo_defaults": false
            },
            "isParent": true
          },
          "isParent": true
        },
        "isParent": true
      }
    }
  },
  "galileoObjects": {
        "stg_capacity_by_DC": {
            "options": {
                "title": {
                    "text": "Total Storage by Datacenter",
                    "margin": 10,
                    "style": {
                        "fontSize": 20
                    }
                },
                "series": [
                    {
                        "data": [
                            {
                                "color": "#0D47A1"
                            },
                            {
                                "color": "#BBDEFB"
                            },
                            {
                                "color": "#00796B"
                            },
                            {
                                "color": "#B2DFDB"
                            },
                            {
                                "color": "#4A148C"
                            },
                            {
                                "color": "#E1BEE7"
                            }
                        ]
                    }
                ],
                "chart": {
                    "type": "pie",
                    "height": 330,
                    "margin": [20,0,30,0],
                    "backgroundColor": "transparent"
                },
                "plotOptions": {
                    "series": {
                        "animation": false
                    },
                    "pie": {
                        "borderWidth": 1,
                        "innerSize": "60%",
                        "size": 170,
                        "showInLegend": false,
                        "dataLabels": {
                            "enabled": true,
                            "padding": 2,
                            "format": "{point.name}<br/>{point.y_pretty:0f} ({point.percentage:.0f}%)"
                        }
                    }
                }
            }
        }
  }
 }