const ArtPage = () => null
export default ArtPage

/*
import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sky, Environment } from '@react-three/drei'

import arial from '@lib/arial.json'
import { Text3D } from '@react-three/drei'

function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = '#000000',
  ...props
}) {
  const config = useMemo(
    () => ({
      size: 16,
      height: 10,
      curveSegments: 42,
      bevelEnabled: true,
      bevelThickness: 14,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 5,
    }),
    []
  )
  const mesh = useRef()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x =
      hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y =
      vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children])
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={arial} {...config}>
        {children}
        <meshNormalMaterial />
      </Text3D>
    </group>
  )
}

function Jumbo({ text }) {
  const ref = useRef()
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.3)
  )
  return (
    <group ref={ref}>
      <Text hAlign="center" position={[0, 0, 0]}>
        {text}
      </Text>
    </group>
  )
}

export default function ArtPage({ address }) {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={null}>
          <Jumbo text={address} />
          <Sky />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = []
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      address: params.address,
    },
    revalidate: 10,
  }
}
*/
