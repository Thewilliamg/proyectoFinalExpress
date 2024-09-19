// 'use client'
import './goBackArrow.css'

export default function GoBackArrow() {
    return (
        <div className="back-arrow">
            <svg width="100%" height="120px" fill='none'>
                <svg x="0" y="0" width="60" height="100" viewBox="0 0 139 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="40" width="180" height="190" rx="6" transform="rotate(45 45 0)" fill="#703A31"/>
                </svg>
                <svg
                    x="0"
                    y="29"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFA800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>

            </svg>

        </div>
    )
}