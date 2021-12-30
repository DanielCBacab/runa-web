import React, { useState, useEffect } from "react";

export default function Masterplan() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://admin.runaresidencial.com/api/terrainapi")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <svg id="Capa_1" data-name="Capa 1" viewBox="0 0 1143 626">
        <g>
          {items.map((item) => (
            <polygon
              key={item.terrainId}
              id={"lote-" + item.terrainId}
              data-name={"lote-" + item.terrainId}
              points={item.svgPoint}
            />
          ))}
        </g>
        <g>
          <text className="text-light" transform="translate(615.2 452.8)">
            1
          </text>

          <text className="text-light" transform="translate(582.7 474.3)">
            2
          </text>

          <text className="text-light" transform="translate(558.6 489.1)">
            3
          </text>

          <text className="text-light" transform="translate(533.6 499.5)">
            4
          </text>

          <text className="text-light" transform="translate(510.9 508.3)">
            5
          </text>

          <text className="text-light" transform="translate(485.8 519.2)">
            6
          </text>

          <text className="text-light" transform="translate(463.3 529)">
            7
          </text>

          <text className="text-light" transform="translate(436.7 540.6)">
            8
          </text>

          <text className="text-light" transform="translate(413.3 550.4)">
            9
          </text>

          <text className="text-light" transform="translate(378.5 562.5)">
            10
          </text>

          <text className="text-light" transform="translate(349 563.5)">
            11
          </text>

          <text className="text-light" transform="translate(321.8 564.5)">
            12
          </text>

          <text className="text-light" transform="translate(293.7 565.5)">
            13
          </text>

          <text className="text-light" transform="translate(265.2 565.5)">
            14
          </text>

          <text className="text-light" transform="translate(237.3 566.5)">
            15
          </text>

          <text className="text-light" transform="translate(209.1 567.5)">
            16
          </text>

          <text className="text-light" transform="translate(216 516.5)">
            17
          </text>

          <text className="text-light" transform="translate(215 487.5)">
            18
          </text>

          <text className="text-light" transform="translate(215 462)">
            19
          </text>

          <text className="text-light" transform="translate(213 434.3)">
            20
          </text>

          <text className="text-light" transform="translate(214 406.8)">
            21
          </text>

          <text className="text-light" transform="translate(212 379.6)">
            22
          </text>

          <text className="text-light" transform="translate(211 354.6)">
            23
          </text>

          <text className="text-light" transform="translate(210 328.1)">
            24
          </text>

          <text className="text-light" transform="translate(208 301.4)">
            25
          </text>

          <text className="text-light" transform="translate(207 275.4)">
            26
          </text>

          <text className="text-light" transform="translate(203 167.6)">
            30
          </text>

          <text className="text-light" transform="translate(203 193.9)">
            29
          </text>

          <text className="text-light" transform="translate(205 221.6)">
            28
          </text>

          <text className="text-light" transform="translate(207 247.8)">
            27
          </text>

          <text className="text-light" transform="translate(203 141.6)">
            31
          </text>

          <text className="text-light" transform="translate(200 114.1)">
            32
          </text>

          <text className="text-light" transform="translate(199 87.4)">
            33
          </text>

          <text className="text-light" transform="translate(198 62.4)">
            34
          </text>

          <text className="text-light" transform="translate(245.8 81.5)">
            35
          </text>

          <text className="text-light" transform="translate(271.3 97.1)">
            36
          </text>

          <text className="text-light" transform="translate(293.8 113.4)">
            37
          </text>

          <text className="text-light" transform="translate(314.7 130.3)">
            38
          </text>

          <text className="text-light" transform="translate(334.7 147.9)">
            39
          </text>

          <text className="text-light" transform="translate(355.6 162.3)">
            40
          </text>

          <text className="text-light" transform="translate(380.6 178)">
            41
          </text>

          <text className="text-light" transform="translate(421 210.8)">
            43
          </text>

          <text className="text-light" transform="translate(400.4 194.4)">
            42
          </text>

          <text className="text-light" transform="translate(439 228.7)">
            44
          </text>

          <text className="text-light" transform="translate(459.6 246.6)">
            45
          </text>

          <text className="text-light" transform="translate(480.7 265.4)">
            46
          </text>

          <text className="text-light" transform="translate(501.3 284.6)">
            47
          </text>

          <text className="text-light" transform="translate(517.7 305.2)">
            48
          </text>

          <text className="text-light" transform="translate(534.1 326.3)">
            49
          </text>

          <text className="text-light" transform="translate(550.5 348.9)">
            50
          </text>

          <text className="text-light" transform="translate(563 375)">
            51
          </text>

          <text className="text-light" transform="translate(578.6 406.8)">
            52
          </text>

          <text className="text-light" transform="translate(528.9 436.8)">
            53
          </text>

          <text className="text-light" transform="translate(513.8 413.8)">
            54
          </text>

          <text className="text-light" transform="translate(501.5 384.9)">
            55
          </text>

          <text className="text-light" transform="translate(480.1 358.9)">
            56
          </text>

          <text className="text-light" transform="translate(459.6 331.4)">
            57
          </text>

          <text className="text-light" transform="translate(439.5 308.1)">
            58
          </text>

          <text className="text-light" transform="translate(423.1 287.6)">
            59
          </text>

          <text className="text-light" transform="translate(400.5 270.7)">
            60
          </text>

          <text className="text-light" transform="translate(377.6 248.8)">
            61
          </text>

          <text className="text-light" transform="translate(352.2 224.7)">
            62
          </text>

          <text className="text-light" transform="translate(326.4 210.2)">
            63
          </text>

          <text className="text-light" transform="translate(304.9 193.9)">
            64
          </text>

          <text className="text-light" transform="translate(283.4 179.4)">
            65
          </text>

          <text className="text-light" transform="translate(256.4 158.8)">
            66
          </text>

          <text className="text-light" transform="translate(256.4 232.6)">
            67
          </text>

          <text className="text-light" transform="translate(280.3 254.8)">
            68
          </text>

          <text className="text-light" transform="translate(302.6 269.9)">
            69
          </text>

          <text className="text-light" transform="translate(323 287.7)">
            70
          </text>

          <text className="text-light" transform="translate(343.3 306.5)">
            71
          </text>

          <text className="text-light" transform="translate(361.6 322.4)">
            72
          </text>

          <text className="text-light" transform="translate(384.4 343)">
            73
          </text>

          <text className="text-light" transform="translate(408.3 368.3)">
            74
          </text>

          <text className="text-light" transform="translate(428.7 389.4)">
            75
          </text>

          <text className="text-light" transform="translate(443.1 413.6)">
            76
          </text>

          <text className="text-light" transform="translate(459.6 436.8)">
            77
          </text>

          <text className="text-light" transform="translate(471 463)">
            78
          </text>

          <text className="text-light" transform="translate(423.7 468)">
            79
          </text>

          <text className="text-light" transform="translate(397.7 480.3)">
            80
          </text>

          <text className="text-light" transform="translate(317.9 499)">
            83
          </text>

          <text className="text-light" transform="translate(344.4 496.4)">
            82
          </text>

          <text className="text-light" transform="translate(372.4 495.5)">
            81
          </text>

          <text className="text-light" transform="translate(278.3 510.2)">
            84
          </text>

          <text className="text-light" transform="translate(274.7 484.3)">
            85
          </text>

          <text className="text-light" transform="translate(274.4 459.8)">
            86
          </text>

          <text className="text-light" transform="translate(274.4 430.7)">
            87
          </text>

          <text className="text-light" transform="translate(274.4 403.9)">
            88
          </text>

          <text className="text-light" transform="translate(274.4 376.3)">
            89
          </text>

          <text className="text-light" transform="translate(274.4 349.9)">
            90
          </text>

          <text className="text-light" transform="translate(274.4 318.4)">
            91
          </text>
        </g>
      </svg>
    );
  }
}
