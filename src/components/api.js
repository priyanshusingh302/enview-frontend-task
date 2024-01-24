const alerts = [
    {
        "id": "7049dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Speeding",
        "vehicle_id": "ee70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Amit",
        "vehicle_friendly_name": "DL12A3456",
        "timestamp": "2023-03-01T04:22:45.424Z"
    },
    {
        "id": "8249dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Lane departure",
        "vehicle_id": "ff70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Priya",
        "vehicle_friendly_name": "UP12A3456",
        "timestamp": "2023-03-01T04:21:45.424Z"
    },
    {
        "id": "9349dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Unsafe following distance",
        "vehicle_id": "gg70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Vikram",
        "vehicle_friendly_name": "TN12A3456",
        "timestamp": "2023-03-01T04:20:45.424Z"
    },
    {
        "id": "a249dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Harsh braking",
        "vehicle_id": "hh70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Anjali",
        "vehicle_friendly_name": "RJ12A3456",
        "timestamp": "2023-03-01T04:19:45.424Z"
    },
    {
        "id": "b349dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Fatigue driving",
        "vehicle_id": "ii70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Rajesh",
        "vehicle_friendly_name": "GJ12A3456",
        "timestamp": "2023-03-01T04:18:45.424Z"
    },
    {
        "id": "c449dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Reckless driving",
        "vehicle_id": "jj70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Neha",
        "vehicle_friendly_name": "KA34A5678",
        "timestamp": "2023-03-01T04:17:45.424Z"
    },
    {
        "id": "d549dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Mobile phone usage",
        "vehicle_id": "kk70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Sanjay",
        "vehicle_friendly_name": "MH34A5678",
        "timestamp": "2023-03-01T04:16:45.424Z"
    },
    {
        "id": "e649dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Crossing speed limits",
        "vehicle_id": "ll70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Aisha",
        "vehicle_friendly_name": "UP34A5678",
        "timestamp": "2023-03-01T04:15:45.424Z"
    },
    {
        "id": "f749dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Aggressive driving",
        "vehicle_id": "mm70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Kumar",
        "vehicle_friendly_name": "TN34A5678",
        "timestamp": "2023-03-01T04:14:45.424Z"
    },
    {
        "id": "g849dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Running red lights",
        "vehicle_id": "nn70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Radha",
        "vehicle_friendly_name": "RJ34A5678",
        "timestamp": "2023-03-01T04:13:45.424Z"
    },
    {
        "id": "h949dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Improper turning",
        "vehicle_id": "oo70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Pradeep",
        "vehicle_friendly_name": "GJ34A5678",
        "timestamp": "2023-03-01T04:12:45.424Z"
    },
    {
        "id": "i049dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Tailgating",
        "vehicle_id": "pp70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Nisha",
        "vehicle_friendly_name": "KA56A7890",
        "timestamp": "2023-03-01T04:11:45.424Z"
    },
    {
        "id": "j149dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Rolling stop",
        "vehicle_id": "qq70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Rahul",
        "vehicle_friendly_name": "MH56A7890",
        "timestamp": "2023-03-01T04:10:45.424Z"
    },
    {
        "id": "k249dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Sleepy driving",
        "vehicle_id": "rr70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Mala",
        "vehicle_friendly_name": "UP56A7890",
        "timestamp": "2023-03-01T04:09:45.424Z"
    },
    {
        "id": "l349dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Swerving",
        "vehicle_id": "ss70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Raj",
        "vehicle_friendly_name": "TN56A7890",
        "timestamp": "2023-03-01T04:08:45.424Z"
    },
    {
        "id": "m449dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Ignoring traffic signals",
        "vehicle_id": "tt70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Sara",
        "vehicle_friendly_name": "RJ56A7890",
        "timestamp": "2023-03-01T04:07:45.424Z"
    },
    {
        "id": "n549dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Tailgating",
        "vehicle_id": "uu70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Karan",
        "vehicle_friendly_name": "GJ56A7890",
        "timestamp": "2023-03-01T04:06:45.424Z"
    },
    {
        "id": "o649dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Speeding",
        "vehicle_id": "vv70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Pooja",
        "vehicle_friendly_name": "KA78A1234",
        "timestamp": "2023-03-01T04:05:45.424Z"
    },
    {
        "id": "p749dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Reckless driving",
        "vehicle_id": "ww70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Vishal",
        "vehicle_friendly_name": "MH78A1234",
        "timestamp": "2023-03-01T04:04:45.424Z"
    },
    {
        "id": "q849dbd2-45bc-4e34-9ea2-c82ced0279f1",
        "alert_type": "Distracted driver",
        "vehicle_id": "xx70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "driver_friendly_name": "Ritu",
        "vehicle_friendly_name": "UP78A1234",
        "timestamp": "2023-03-01T04:03:45.424Z"
    }
];


const vehicles = [
    {
        "id": "ee70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "DL12A3456"
    },
    {
        "id": "ff70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "UP12A3456"
    },
    {
        "id": "gg70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "TN12A3456"
    },
    {
        "id": "hh70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "RJ12A3456"
    },
    {
        "id": "ii70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "GJ12A3456"
    },
    {
        "id": "jj70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "KA34A5678"
    },
    {
        "id": "kk70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "MH34A5678"
    },
    {
        "id": "ll70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "UP34A5678"
    },
    {
        "id": "mm70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "TN34A5678"
    },
    {
        "id": "nn70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "RJ34A5678"
    },
    {
        "id": "oo70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "GJ34A5678"
    },
    {
        "id": "pp70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "KA56A7890"
    },
    {
        "id": "qq70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "MH56A7890"
    },
    {
        "id": "rr70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "UP56A7890"
    },
    {
        "id": "ss70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "TN56A7890"
    },
    {
        "id": "tt70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "RJ56A7890"
    },
    {
        "id": "uu70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "GJ56A7890"
    },
    {
        "id": "vv70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "KA78A1234"
    },
    {
        "id": "ww70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "MH78A1234"
    },
    {
        "id": "xx70a7e5-8397-4914-bbbb-4d6bb521ec67",
        "friendly_name": "UP78A1234"
    }
];


export { alerts, vehicles };
