import{n as $i,V as A,d as Ct,f as Ri,c as F,O as Qi,g as ht,o as Ze,U as qe,k as Dt,p as Rt,H as At,N as be,q as Xi,C as zt,r as et,s as Ai,t as ut,u as Yi,v as xt,Z as Mt,w as xi,x as Mi,y as Ki,z as Ji,E as es,I as ts,J as Si,K as is,X as Ni,Y as ss,_ as os,$ as as,a0 as ns,a1 as rs,a2 as ls,A as cs,a3 as fs,a4 as zi,a5 as hs,S as Ui,W as us,e as Ii,a6 as ds,P as ps,D as wi,a7 as ms,a8 as _t,a9 as vs,aa as St,M as lt,ab as yi,ac as Pi,ad as gs,ae as Tt,b as Ie,af as bi,ag as ft,ah as xs,l as _i,ai as Ti,aj as Ms,Q as Ss,ak as ws,al as ys,am as Ps,an as bs,ao as _s,ap as Ts,aq as Es,ar as Cs,m as Oi}from"./three.module.6N5hRvfo.js";import{S as Ei}from"./Proceso3D.astro_astro_type_script_index_0_lang.DGa3esqC.js";import{D as Ks}from"./Proceso3D.astro_astro_type_script_index_0_lang.DGa3esqC.js";const ct=new A;function oe(c,e,s,a,n,i){const r=2*Math.PI*n/4,h=Math.max(i-2*n,0),g=Math.PI/4;ct.copy(e),ct[a]=0,ct.normalize();const l=.5*r/(r+h),u=1-ct.angleTo(c)/g;return Math.sign(ct[s])===1?u*l:h/(r+h)+l+l*(1-u)}class Xt extends $i{constructor(e=1,s=1,a=1,n=2,i=.1){const r=n*2+1;if(i=Math.min(e/2,s/2,a/2,i),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:s,depth:a,segments:n,radius:i},r===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const g=new A,l=new A,u=new A(e,s,a).divideScalar(2).subScalar(i),x=this.attributes.position.array,P=this.attributes.normal.array,m=this.attributes.uv.array,b=x.length/6,v=new A,R=.5/r;for(let S=0,_=0;S<x.length;S+=3,_+=2)switch(g.fromArray(x,S),l.copy(g),l.x-=Math.sign(l.x)*R,l.y-=Math.sign(l.y)*R,l.z-=Math.sign(l.z)*R,l.normalize(),x[S+0]=u.x*Math.sign(g.x)+l.x*i,x[S+1]=u.y*Math.sign(g.y)+l.y*i,x[S+2]=u.z*Math.sign(g.z)+l.z*i,P[S+0]=l.x,P[S+1]=l.y,P[S+2]=l.z,Math.floor(S/b)){case 0:v.set(1,0,0),m[_+0]=oe(v,l,"z","y",i,a),m[_+1]=1-oe(v,l,"y","z",i,s);break;case 1:v.set(-1,0,0),m[_+0]=1-oe(v,l,"z","y",i,a),m[_+1]=1-oe(v,l,"y","z",i,s);break;case 2:v.set(0,1,0),m[_+0]=1-oe(v,l,"x","z",i,e),m[_+1]=oe(v,l,"z","x",i,a);break;case 3:v.set(0,-1,0),m[_+0]=1-oe(v,l,"x","z",i,e),m[_+1]=1-oe(v,l,"z","x",i,a);break;case 4:v.set(0,0,1),m[_+0]=1-oe(v,l,"x","y",i,e),m[_+1]=1-oe(v,l,"y","x",i,s);break;case 5:v.set(0,0,-1),m[_+0]=oe(v,l,"x","y",i,e),m[_+1]=1-oe(v,l,"y","x",i,s);break}}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.segments,e.radius)}}function Ds(c,e=!1){const s=c[0].index!==null,a=new Set(Object.keys(c[0].attributes)),n=new Set(Object.keys(c[0].morphAttributes)),i={},r={},h=c[0].morphTargetsRelative,g=new Ct;let l=0;for(let u=0;u<c.length;++u){const x=c[u];let P=0;if(s!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in x.attributes){if(!a.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;i[m]===void 0&&(i[m]=[]),i[m].push(x.attributes[m]),P++}if(P!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(h!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in x.morphAttributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[m]===void 0&&(r[m]=[]),r[m].push(x.morphAttributes[m])}if(e){let m;if(s)m=x.index.count;else if(x.attributes.position!==void 0)m=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;g.addGroup(l,m,u),l+=m}}if(s){let u=0;const x=[];for(let P=0;P<c.length;++P){const m=c[P].index;for(let b=0;b<m.count;++b)x.push(m.getX(b)+u);u+=c[P].attributes.position.count}g.setIndex(x)}for(const u in i){const x=Ci(i[u]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;g.setAttribute(u,x)}for(const u in r){const x=r[u][0].length;if(x!==0){g.morphAttributes=g.morphAttributes||{},g.morphAttributes[u]=[];for(let P=0;P<x;++P){const m=[];for(let v=0;v<r[u].length;++v)m.push(r[u][v][P]);const b=Ci(m);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;g.morphAttributes[u].push(b)}}}return g}function Ci(c){let e,s,a,n=-1,i=0;for(let l=0;l<c.length;++l){const u=c[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(s===void 0&&(s=u.itemSize),s!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=u.normalized),a!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=u.gpuType),n!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;i+=u.count*s}const r=new e(i),h=new Ri(r,s,a);let g=0;for(let l=0;l<c.length;++l){const u=c[l];if(u.isInterleavedBufferAttribute){const x=g/s;for(let P=0,m=u.count;P<m;P++)for(let b=0;b<s;b++){const v=u.getComponent(P,b);h.setComponent(P+x,b,v)}}else r.set(u.array,g);g+=u.count*s}return n!==void 0&&(h.gpuType=n),h}const Et={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class tt{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rs=new Qi(-1,1,1,-1,0,1);class As extends Ct{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const Ns=new As;class Yt{constructor(e){this._mesh=new F(Ns,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zs extends tt{constructor(e,s="tDiffuse"){super(),this.textureID=s,this.uniforms=null,this.material=null,e instanceof Ze?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qe.clone(e.uniforms),this.material=new Ze({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yt(this.material)}render(e,s,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Di extends tt{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,a){const n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let r,h;this.inverse?(r=0,h=1):(r=1,h=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),i.buffers.stencil.setClear(h),i.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}}class Us extends tt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Is{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const a=e.getSize(new Dt);this._width=a.width,this._height=a.height,s=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:At}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zs(Et),this.copyPass.material.blending=be,this.timer=new Xi}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const s=this.renderer.getRenderTarget();let a=!1;for(let n=0,i=this.passes.length;n<i;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),r.needsSwap){if(a){const h=this.renderer.getContext(),g=this.renderer.state.buffers.stencil;g.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),g.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Di!==void 0&&(r instanceof Di?a=!0:r instanceof Us&&(a=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const a=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(a,n),this.renderTarget2.setSize(a,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(a,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Os extends tt{constructor(e,s,a=null,n=null,i=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=a,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new zt}render(e,s,a){const n=e.autoClear;e.autoClear=!1;let i,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const wt={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Dt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new et},cameraProjectionMatrixInverse:{value:new et},cameraWorldMatrix:{value:new et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},yt={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Qt={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ls(c=5){const e=Math.floor(c)%2===0?Math.floor(c)+1:Math.floor(c),s=Gs(e),a=s.length,n=new Uint8Array(a*4);for(let r=0;r<a;++r){const h=s[r],g=2*Math.PI*h/a,l=new A(Math.cos(g),Math.sin(g),0).normalize();n[r*4]=(l.x*.5+.5)*255,n[r*4+1]=(l.y*.5+.5)*255,n[r*4+2]=127,n[r*4+3]=255}const i=new Ai(n,e,e);return i.wrapS=ut,i.wrapT=ut,i.needsUpdate=!0,i}function Gs(c){const e=Math.floor(c)%2===0?Math.floor(c)+1:Math.floor(c),s=e*e,a=Array(s).fill(0);let n=Math.floor(e/2),i=e-1;for(let r=1;r<=s;){if(n===-1&&i===e?(i=e-2,n=0):(i===e&&(i=0),n<0&&(n=e-1)),a[n*e+i]!==0){i-=2,n++;continue}else a[n*e+i]=r++;i++,n--}return a}const Pt={defines:{SAMPLES:16,SAMPLE_VECTORS:Li(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Dt},cameraProjectionMatrixInverse:{value:new et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Li(c,e,s){const a=Fs(c,e,s);let n="vec3[SAMPLES](";for(let i=0;i<c;i++){const r=a[i];n+=`vec3(${r.x}, ${r.y}, ${r.z})${i<c-1?",":")"}`}return n}function Fs(c,e,s){const a=[];for(let n=0;n<c;n++){const i=2*Math.PI*e*n/c,r=Math.pow(n/(c-1),s);a.push(new A(Math.cos(i),Math.sin(i),r))}return a}class Vs{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let s=0;s<256;s++)this.p[s]=Math.floor(e.random()*256);this.perm=[];for(let s=0;s<512;s++)this.perm[s]=this.p[s&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,s){let a,n,i;const r=.5*(Math.sqrt(3)-1),h=(e+s)*r,g=Math.floor(e+h),l=Math.floor(s+h),u=(3-Math.sqrt(3))/6,x=(g+l)*u,P=g-x,m=l-x,b=e-P,v=s-m;let R,S;b>v?(R=1,S=0):(R=0,S=1);const _=b-R+u,L=v-S+u,I=b-1+2*u,G=v-1+2*u,H=g&255,W=l&255,$=this.perm[H+this.perm[W]]%12,N=this.perm[H+R+this.perm[W+S]]%12,O=this.perm[H+1+this.perm[W+1]]%12;let U=.5-b*b-v*v;U<0?a=0:(U*=U,a=U*U*this._dot(this.grad3[$],b,v));let p=.5-_*_-L*L;p<0?n=0:(p*=p,n=p*p*this._dot(this.grad3[N],_,L));let T=.5-I*I-G*G;return T<0?i=0:(T*=T,i=T*T*this._dot(this.grad3[O],I,G)),70*(a+n+i)}noise3d(e,s,a){let n,i,r,h;const l=(e+s+a)*.3333333333333333,u=Math.floor(e+l),x=Math.floor(s+l),P=Math.floor(a+l),m=1/6,b=(u+x+P)*m,v=u-b,R=x-b,S=P-b,_=e-v,L=s-R,I=a-S;let G,H,W,$,N,O;_>=L?L>=I?(G=1,H=0,W=0,$=1,N=1,O=0):_>=I?(G=1,H=0,W=0,$=1,N=0,O=1):(G=0,H=0,W=1,$=1,N=0,O=1):L<I?(G=0,H=0,W=1,$=0,N=1,O=1):_<I?(G=0,H=1,W=0,$=0,N=1,O=1):(G=0,H=1,W=0,$=1,N=1,O=0);const U=_-G+m,p=L-H+m,T=I-W+m,_e=_-$+2*m,he=L-N+2*m,k=I-O+2*m,Te=_-1+3*m,Ee=L-1+3*m,Z=I-1+3*m,ee=u&255,K=x&255,ne=P&255,Ce=this.perm[ee+this.perm[K+this.perm[ne]]]%12,Oe=this.perm[ee+G+this.perm[K+H+this.perm[ne+W]]]%12,De=this.perm[ee+$+this.perm[K+N+this.perm[ne+O]]]%12,ue=this.perm[ee+1+this.perm[K+1+this.perm[ne+1]]]%12;let de=.6-_*_-L*L-I*I;de<0?n=0:(de*=de,n=de*de*this._dot3(this.grad3[Ce],_,L,I));let re=.6-U*U-p*p-T*T;re<0?i=0:(re*=re,i=re*re*this._dot3(this.grad3[Oe],U,p,T));let le=.6-_e*_e-he*he-k*k;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[De],_e,he,k));let pe=.6-Te*Te-Ee*Ee-Z*Z;return pe<0?h=0:(pe*=pe,h=pe*pe*this._dot3(this.grad3[ue],Te,Ee,Z)),32*(n+i+r+h)}noise4d(e,s,a,n){const i=this.grad4,r=this.simplex,h=this.perm,g=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,x,P,m,b;const v=(e+s+a+n)*g,R=Math.floor(e+v),S=Math.floor(s+v),_=Math.floor(a+v),L=Math.floor(n+v),I=(R+S+_+L)*l,G=R-I,H=S-I,W=_-I,$=L-I,N=e-G,O=s-H,U=a-W,p=n-$,T=N>O?32:0,_e=N>U?16:0,he=O>U?8:0,k=N>p?4:0,Te=O>p?2:0,Ee=U>p?1:0,Z=T+_e+he+k+Te+Ee,ee=r[Z][0]>=3?1:0,K=r[Z][1]>=3?1:0,ne=r[Z][2]>=3?1:0,Ce=r[Z][3]>=3?1:0,Oe=r[Z][0]>=2?1:0,De=r[Z][1]>=2?1:0,ue=r[Z][2]>=2?1:0,de=r[Z][3]>=2?1:0,re=r[Z][0]>=1?1:0,le=r[Z][1]>=1?1:0,pe=r[Z][2]>=1?1:0,it=r[Z][3]>=1?1:0,Le=N-ee+l,Ge=O-K+l,$e=U-ne+l,Fe=p-Ce+l,q=N-Oe+2*l,Q=O-De+2*l,Ve=U-ue+2*l,ke=p-de+2*l,te=N-re+3*l,st=O-le+3*l,Be=U-pe+3*l,Re=p-it+3*l,Qe=N-1+4*l,Xe=O-1+4*l,ot=U-1+4*l,at=p-1+4*l,Ae=R&255,ie=S&255,Ne=_&255,ze=L&255,It=h[Ae+h[ie+h[Ne+h[ze]]]]%32,pt=h[Ae+ee+h[ie+K+h[Ne+ne+h[ze+Ce]]]]%32,Ye=h[Ae+Oe+h[ie+De+h[Ne+ue+h[ze+de]]]]%32,Ot=h[Ae+re+h[ie+le+h[Ne+pe+h[ze+it]]]]%32,me=h[Ae+1+h[ie+1+h[Ne+1+h[ze+1]]]]%32;let xe=.6-N*N-O*O-U*U-p*p;xe<0?u=0:(xe*=xe,u=xe*xe*this._dot4(i[It],N,O,U,p));let Me=.6-Le*Le-Ge*Ge-$e*$e-Fe*Fe;Me<0?x=0:(Me*=Me,x=Me*Me*this._dot4(i[pt],Le,Ge,$e,Fe));let Se=.6-q*q-Q*Q-Ve*Ve-ke*ke;Se<0?P=0:(Se*=Se,P=Se*Se*this._dot4(i[Ye],q,Q,Ve,ke));let je=.6-te*te-st*st-Be*Be-Re*Re;je<0?m=0:(je*=je,m=je*je*this._dot4(i[Ot],te,st,Be,Re));let He=.6-Qe*Qe-Xe*Xe-ot*ot-at*at;return He<0?b=0:(He*=He,b=He*He*this._dot4(i[me],Qe,Xe,ot,at)),27*(u+x+P+m+b)}_dot(e,s,a){return e[0]*s+e[1]*a}_dot3(e,s,a,n){return e[0]*s+e[1]*a+e[2]*n}_dot4(e,s,a,n,i){return e[0]*s+e[1]*a+e[2]*n+e[3]*i}}class ge extends tt{constructor(e,s,a=512,n=512,i,r,h){super(),this.width=a,this.height=n,this.clear=!0,this.camera=s,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ls(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Rt(this.width,this.height,{type:At,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ze({defines:Object.assign({},wt.defines),uniforms:qe.clone(wt.uniforms),vertexShader:wt.vertexShader,fragmentShader:wt.fragmentShader,blending:be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Yi,this.normalMaterial.blending=be,this.pdMaterial=new Ze({defines:Object.assign({},Pt.defines),uniforms:qe.clone(Pt.uniforms),vertexShader:Pt.vertexShader,fragmentShader:Pt.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ze({defines:Object.assign({},yt.defines),uniforms:qe.clone(yt.uniforms),vertexShader:yt.vertexShader,fragmentShader:yt.fragmentShader,blending:be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ze({uniforms:qe.clone(Et.uniforms),vertexShader:Et.vertexShader,fragmentShader:Et.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Mi,blendDst:Mt,blendEquation:xt,blendSrcAlpha:xi,blendDstAlpha:Mt,blendEquationAlpha:xt}),this.blendMaterial=new Ze({uniforms:qe.clone(Qt.uniforms),vertexShader:Qt.vertexShader,fragmentShader:Qt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ki,blendSrc:Mi,blendDst:Mt,blendEquation:xt,blendSrcAlpha:xi,blendDstAlpha:Mt,blendEquationAlpha:xt}),this._fsQuad=new Yt(null),this._originalClearColor=new zt,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),h!==void 0&&this.updatePdMaterial(h)}setSize(e,s){this.width=e,this.height=s,this.gtaoRenderTarget.setSize(e,s),this.normalRenderTarget.setSize(e,s),this.pdRenderTarget.setSize(e,s),this.gtaoMaterial.uniforms.resolution.value.set(e,s),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,s),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,s){e!==void 0?(this.depthTexture=e,this.normalTexture=s,this._renderGBuffer=!1):(this.depthTexture=new Ji,this.depthTexture.format=es,this.depthTexture.type=ts,this.normalRenderTarget=new Rt(this.width,this.height,{minFilter:Si,magFilter:Si,type:At,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const a=this.normalTexture?1:0,n=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=a,this.gtaoMaterial.defines.DEPTH_SWIZZLING=n,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=a,this.pdMaterial.defines.DEPTH_SWIZZLING=n,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let s=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,s=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,s=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,s=!0),s&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Li(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,s,a){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ge.OUTPUT.Off:break;case ge.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=a.texture,this.copyMaterial.blending=be,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ge.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=be,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ge.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=be,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ge.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:s);break;case ge.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=be,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s);break;case ge.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=a.texture,this.copyMaterial.blending=be,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:s),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:s);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,s,a,n,i){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),h=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=s,this._fsQuad.render(e),e.autoClear=h,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,s,a,n,i){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),h=e.autoClear;e.setRenderTarget(a),e.autoClear=!1,n=s.clearColor||n,i=s.clearAlpha||i,n!=null&&(e.setClearColor(n),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=s,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=h,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){const e=this.scene,s=this._visibilityCache;e.traverse(function(a){(a.isPoints||a.isLine||a.isLine2)&&a.visible&&(a.visible=!1,s.push(a))})}_restoreVisibility(){const e=this._visibilityCache;for(let s=0;s<e.length;s++)e[s].visible=!0;e.length=0}_generateNoise(e=64){const s=new Vs,a=e*e*4,n=new Uint8Array(a);for(let r=0;r<e;r++)for(let h=0;h<e;h++){const g=r,l=h;n[(r*e+h)*4]=(s.noise(g,l)*.5+.5)*255,n[(r*e+h)*4+1]=(s.noise(g+e,l)*.5+.5)*255,n[(r*e+h)*4+2]=(s.noise(g,l+e)*.5+.5)*255,n[(r*e+h)*4+3]=(s.noise(g+e,l+e)*.5+.5)*255}const i=new Ai(n,e,e,is,Ni);return i.wrapS=ut,i.wrapT=ut,i.needsUpdate=!0,i}}ge.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const bt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ks extends tt{constructor(){super(),this.isOutputPass=!0,this.uniforms=qe.clone(bt.uniforms),this.material=new ss({name:bt.name,uniforms:this.uniforms,vertexShader:bt.vertexShader,fragmentShader:bt.fragmentShader}),this._fsQuad=new Yt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},os.getTransfer(this._outputColorSpace)===as&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ns?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ls?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zi?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Nt=Oi.clamp,X=Oi.lerp,w=(c,e,s)=>{const a=Nt((s-c)/(e-c),0,1);return a*a*(3-2*a)},Bs=(c,e,s)=>Nt((s-c)/(e-c),0,1),ae={mint:10543280,purple:6295648,grey:16119285};function dt(c){let e=c>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Ut(c,e,s,a=!0){const n=document.createElement("canvas");n.width=c,n.height=e,s(n.getContext("2d"),c,e);const i=new Cs(n);return i.wrapS=i.wrapT=ut,i.anisotropy=4,a&&(i.colorSpace=Ii),i}function js(){return Ut(256,256,(c,e,s)=>{const a=dt(7),n=c.createImageData(e,s);for(let i=0;i<e*s;i++){const r=118+a()*20;n.data.set([r,r,r,255],i*4)}c.putImageData(n,0,0)},!1)}function Hs(){return Ut(1024,256,(c,e,s)=>{const a=dt(11);c.fillStyle="#dcc49c",c.fillRect(0,0,e,s);for(let n=0;n<9;n++)c.fillStyle=`rgba(${170+a()*30},${130+a()*25},${85+a()*20},${.08+a()*.1})`,c.fillRect(0,a()*s,e,8+a()*40);for(let n=0;n<140;n++){const i=a()*s,r=1+a()*4,h=.004+a()*.01,g=a()*6;c.strokeStyle=`rgba(125,88,52,${.05+a()*.12})`,c.lineWidth=.5+a()*1.6,c.beginPath();for(let l=0;l<=e;l+=6){const u=i+Math.sin(l*h+g)*r;l?c.lineTo(l,u):c.moveTo(l,u)}c.stroke()}for(let n=0;n<3;n++){const i=120+a()*(e-240),r=40+a()*(s-80),h=5+a()*7,g=c.createRadialGradient(i,r,1,i,r,h*2.2);g.addColorStop(0,"rgba(95,55,25,.7)"),g.addColorStop(1,"rgba(95,55,25,0)"),c.fillStyle=g,c.beginPath(),c.ellipse(i,r,h*2.6,h,0,0,Math.PI*2),c.fill()}})}function Ws(){return Ut(64,1024,(c,e,s)=>{const a=dt(23);c.fillStyle="rgb(8,8,8)",c.fillRect(0,0,e,s);let n=0;for(;n<s;){const i=40+a()*70,r=14+a()*34;c.fillStyle=`rgb(${r},${r},${r})`,c.fillRect(0,n,e,i),c.fillStyle="rgb(120,120,120)",c.fillRect(0,n,e,2),n+=i*(.55+a()*.3)}for(let i=0;i<60;i++){const r=40+a()*90;c.fillStyle=`rgb(${r},${r},${r})`,c.fillRect(0,a()*s,e,1)}},!1)}function Zs(c){const e=new Ui,s=new F(new Tt(60,48,24),new Ie({side:Ps,vertexColors:!0})),a=s.geometry.attributes.position,n=[];for(let g=0;g<a.count;g++){const l=a.getY(g)/60,u=l<0?.42+l*.12:.34+l*.2;n.push(u,u,u)}s.geometry.setAttribute("color",new ht(n,3)),e.add(s);const i=(g,l,u,x,P,m)=>{const b=new F(new _t(g,l),new Ie({color:new zt().setScalar(m),side:ft}));b.position.set(u,x,P),b.lookAt(0,0,0),e.add(b)};i(42,28,-22,44,18,11),i(10,40,46,16,-26,5),i(40,12,14,10,50,2.2),i(56,30,-26,26,-36,3.6);const r=new bs(c),h=r.fromScene(e,.03);return r.dispose(),e.traverse(g=>{g.isMesh&&(g.geometry.dispose(),g.material.dispose())}),h}function Qs(c,e={}){const s=matchMedia("(pointer: coarse)").matches,a=Object.assign({aoSamples:s?8:16,bg:1.28,exp:1,env:.6,key:3,aoR:.1,aoScale:2.6,aoT:.5,aoBlend:.95,shadow:.2},e.tune||{}),n=new Ui;n.background=new zt(ae.grey).multiplyScalar(a.bg);const i=new us({antialias:!1,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});if(!i.capabilities.isWebGL2)throw i.dispose(),new Error("WebGL2 no disponible");const r=Math.min(devicePixelRatio||1,1.5);i.setPixelRatio(r),i.outputColorSpace=Ii,i.toneMapping=zi,i.toneMappingExposure=a.exp,i.shadowMap.enabled=!0,i.shadowMap.type=ds,i.localClippingEnabled=!0,i.domElement.setAttribute("aria-hidden","true"),c.appendChild(i.domElement);const h=new ps(30,16/9,.5,900),g=Zs(i);n.environment=g.texture,n.environmentIntensity=a.env,a.showEnv&&(n.background=g.texture,n.backgroundBlurriness=0);const l=new wi(16774890,a.key);l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.radius=12,l.shadow.blurSamples=16,l.shadow.bias=-2e-4,l.shadow.normalBias=.03,n.add(l,l.target);const u=new A(-.42,.82,.4).normalize(),x=new wi(15265535,.25);x.position.set(20,12,-10),n.add(x),n.add(new ms(16777215,13617860,.25));const P=new F(new _t(1200,1200),new vs({color:2760744,opacity:a.shadow}));P.rotation.x=-Math.PI/2,P.position.y=-.02,P.receiveShadow=!0,P.userData.ao=!0,n.add(P);const m=new St;m.name="SDH_proceso",n.add(m);const b=js();b.repeat.set(3,3);const v=new lt({color:ae.mint,roughness:.5,metalness:0,specularIntensity:.55,sheen:.3,sheenRoughness:.75,sheenColor:16777215,bumpMap:b,bumpScale:.35}),R=(o,t,f,d={})=>new lt({color:o,roughness:t,metalness:f,...d}),S=R(14541285,.26,1,{envMapIntensity:1.5}),_=R(11844546,.3,1,{envMapIntensity:1.4}),L=R(16514042,.62,0),I=R(ae.purple,.35,.1),G=R(3093561,.38,.3),H=R(13215322,.32,1),W=Hs(),$=R(16777215,.86,0,{map:W,vertexColors:!0,bumpMap:W,bumpScale:.6}),N=new Map;function O(o,t,f,d=.04,y=2){const E=[o,t,f,d,y].join(":");return N.has(E)||N.set(E,new Xt(o,t,f,y,Math.min(d,o/3,t/3,f/3))),N.get(E)}let U=2;function p(o,t,f,d,y,E,B,D=S,V=.035){const j=new F(O(t,f,d,V,U),D);return j.position.set(y,E,B),j.castShadow=j.receiveShadow=!0,o.add(j),j}function T(o,t=m){const f=new St;return f.name=o,t.add(f),f}function _e(o,t,f){const d=[];o.updateMatrixWorld(!0);const y=dt(5);for(const D of o.children){if(!D.isMesh)continue;const V=D.geometry.clone();if(V.applyMatrix4(D.matrix),f){const j=f(y),Y=V.attributes.position.count,J=new Float32Array(Y*3);for(let se=0;se<Y;se++)J.set(j,se*3);V.setAttribute("color",new Ri(J,3))}d.push(V)}const E=Ds(d,!1);d.forEach(D=>D.dispose());const B=new F(E,t);return B.castShadow=B.receiveShadow=!0,B}function he(o,t,f,d=I,y){const E=new Ts(t.map(D=>new A(...D))),B=new F(new Es(E,96,f,8,!1),d);return o.add(B),B}function k(o,t,f,d,y,E,B=S){const D=new F(new _s(t,t,f,24),B);return D.position.set(d,y,E),D.castShadow=D.receiveShadow=!0,o.add(D),D}function Te(o){U=o;const t=new St;p(t,5.8,.13,3.8,0,.17,0,v);for(const d of[-1.86,1.86]){p(t,5.72,2.68,.13,0,1.56,d,v);for(const y of[-2.66,-1.78,-.89,0,.89,1.78,2.66])p(t,.1,2.42,.15,y,1.45,d+Math.sign(d)*.065,v,.025);p(t,5.6,.09,.12,0,.62,d+Math.sign(d)*.07,v,.02)}for(const d of[-2.86,2.86]){p(t,.13,2.04,3.72,d,1.23,0,v),p(t,.13,.29,3.72,d,2.76,0,v);for(const y of[-1.43,1.43])p(t,.13,.48,.86,d,2.38,y,v);for(const y of[-1.72,0,1.72])p(t,.15,1.93,.1,d+Math.sign(d)*.065,1.15,y,v,.025)}for(const d of[-1.9,1.9])p(t,6,.18,.2,0,2.91,d,v,.06),p(t,5.88,.14,.18,0,.26,d,v);for(const d of[-2.9,2.9])p(t,.2,.18,3.8,d,2.91,0,v,.06),p(t,.18,.14,3.8,d,.26,0,v);for(const d of[-2.7,0,2.7])p(t,.17,.12,3.55,d,.06,0,v,.02);const f=_e(t,v);return U=2,f}const Ee=Te(2);Ee.name="Caja_PP_600x400x300";const Z=Te(1).geometry,ee=Ee.geometry,K=T("Caja_principal"),ne=new F(ee,v);ne.castShadow=ne.receiveShadow=!0,K.add(ne);const Ce=new lt({color:15460334,roughness:.3,transparent:!0,opacity:.5,depthWrite:!1}),Oe=T("Modelo_CAD");Oe.add(new F(ee,Ce));const De=new yi({color:ae.purple,transparent:!0,opacity:1}),ue=new Pi(new gs(Z,38),De);ue.name="Trazado_tecnico",m.add(ue);const de=ue.geometry.attributes.position.count,re=T("Cotas_sin_texto"),le=new yi({color:ae.purple,transparent:!0,opacity:.8}),pe=[[-3,.03,2.65],[3,.03,2.65],[-3,.03,2.45],[-3,.03,2.85],[3,.03,2.45],[3,.03,2.85],[3.6,.03,-2],[3.6,.03,2],[3.4,.03,-2],[3.8,.03,-2],[3.4,.03,2],[3.8,.03,2],[-3.5,0,2.2],[-3.5,3,2.2],[-3.7,0,2.2],[-3.3,0,2.2],[-3.7,3,2.2],[-3.3,3,2.2]];re.add(new Pi(new Ct().setFromPoints(pe.map(o=>new A(...o))),le));const it=T("Materia_en_transformacion"),Le=new Tt(.06,12,8);Le.scale(1,.75,1);const Ge=R(15659758,.35,0,{transmission:0,sheen:.4,sheenColor:16777215}),$e=[];for(let o=0;o<96;o++){const t=new F(Le,Ge);t.castShadow=!0,it.add(t);const f=o/96,d=f*Math.PI*11;$e.push({o:t,start:new A(Math.cos(d)*(4+f*2),1+Math.sin(d*1.3)*3,Math.sin(d)*(3+f*2)),end:new A(-2.9+5.8*(o%16/15),.3+2.5*(Math.floor(o/16)/5),o%2?1.9:-1.9)})}const Fe=T("Molde_ilustrativo"),q=T("Mitad_cavidad",Fe),Q=T("Mitad_nucleo",Fe);p(q,8.1,.65,6.2,0,-.45,0,_,.09),p(q,7.8,.38,5.9,0,.065,0,S,.06);for(const o of[-3.45,3.45])p(q,.65,2.6,5.35,o,1.5,0,S,.05);p(q,6.25,2.6,.65,0,1.5,-2.45,S,.05),p(q,6.25,.35,.65,0,.4,2.45,S,.05),p(Q,8,.62,6.1,0,0,0,_,.09),p(Q,7.7,.25,5.8,0,-.4,0,S,.04),p(Q,5.48,2.4,3.48,0,-1.7,0,S,.12);for(const o of[-3.45,3.45])for(const t of[-2.45,2.45])k(q,.13,4.4,o,1.6,t,S),k(Q,.23,.75,o,0,t,_),k(q,.22,.12,o,-.05,t,G);for(const o of[-4.15,4.15])for(const t of[-1.6,1.6]){const f=k(q,.13,.4,o,0,t,H);f.rotation.z=Math.PI/2}const Ve=R(1908772,.6,.4);for(const o of[-4.06,4.06])for(const t of[-.6,.6]){const f=k(q,.1,.02,o,-.45,t,Ve);f.rotation.z=Math.PI/2}for(const o of[-3.11,3.11])for(const t of[-2.4,-.8,.8,2.4]){const f=k(q,.1,.02,t,-.45,o,Ve);f.rotation.x=Math.PI/2}for(const o of[-3.7,-1.25,1.25,3.7])for(const t of[-2.8,2.8])k(Q,.14,.06,o,.33,t,G);for(const o of[-3.7,3.7])for(const t of[-1.1,1.1])k(Q,.14,.06,o,.33,t,G);k(Q,.42,.12,0,.36,0,S),k(Q,.16,.14,0,.44,0,H);const ke=new Ie({color:ae.purple,transparent:!0,opacity:.75});he(q,[[-4.15,.26,-1.6],[-3.1,.26,-1.6],[-3.1,.26,1.6],[-4.15,.26,1.6]],.035,ke),he(q,[[4.15,.26,-1.6],[3.1,.26,-1.6],[3.1,.26,1.6],[4.15,.26,1.6]],.035,ke);const te=T("Inyeccion"),st=k(te,.36,4,-5.5,1.5,0,S);st.rotation.z=Math.PI/2;for(const o of[-6.6,-5.6,-4.6]){const t=k(te,.42,.38,o,1.5,0,G);t.rotation.z=Math.PI/2}const Be=new F(new bi(.33,.8,24),S);Be.rotation.z=-Math.PI/2,Be.position.set(-3.1,1.5,0),te.add(Be);const Re=new F(new bi(.9,1.4,4,1,!0),S);Re.material=S,Re.rotation.z=Math.PI,Re.position.set(-6.8,3,0),te.add(Re);const Qe=new lt({color:ae.mint,emissive:16756858,emissiveIntensity:.35,roughness:.2}),Xe=he(te,[[-6.9,4.7,0],[-6.8,3.4,0],[-6.8,1.55,0],[-5,1.55,0],[-3,1.55,0]],.09,Qe),ot=Xe.geometry.index.count,at=T("Granulos_en_tolva",te),Ae=[];for(let o=0;o<32;o++){const t=new F(Le,Ge);at.add(t),Ae.push(t)}const ie=T("Inspeccion"),Ne=Ut(512,512,(o,t,f)=>{const d=dt(31);o.fillStyle="#3b3d40",o.fillRect(0,0,t,f);for(let y=0;y<9e3;y++){const E=30+d()*120;o.fillStyle=`rgba(${E},${E},${E+4},${.35+d()*.5})`,o.fillRect(d()*t,d()*f,1+d()*2.2,1+d()*2.2)}}),ze=R(16777215,.3,0,{map:Ne,clearcoat:.5,clearcoatRoughness:.25}),It=p(ie,7.6,.9,5.2,.4,-.45,.1,ze,.05),pt=new Ie({color:ae.purple,transparent:!0,opacity:.07,side:ft,depthWrite:!1}),Ye=new F(new _t(6.5,4.5),pt);Ye.rotation.x=-Math.PI/2,ie.add(Ye);const Ot=he(ie,[[-3.15,0,2.15],[3.15,0,2.15],[3.15,0,-2.15],[-3.15,0,-2.15],[-3.15,0,2.15]],.02,I),me=T("Calibrador",ie);p(me,.12,.12,3.3,0,0,0,S,.01),p(me,.75,.18,.65,.08,.12,.25,G,.02),p(me,.42,.015,.31,.1,.22,.25,R(12108988,.2,0),.005);for(const o of[-1.1,.5])p(me,.6,.12,.12,-.28,0,o,S,.01);me.position.set(3.45,.07,.9),me.rotation.y=.2,me.userData.base=.07;const xe=T("Puntos_de_control",ie),Me=new Ie({color:ae.purple});for(const o of[-2.9,2.9])for(const t of[-1.9,1.9]){const f=new F(new Tt(.06,16,10),Me);f.position.set(o,2.98,t),xe.add(f)}for(const o of[-1.78,0,1.78]){const t=new F(new Tt(.05,16,10),Me);t.position.set(o,1.45,2),xe.add(t)}const Se=T("Detalle_y_etiqueta",K),je=p(Se,1.28,.72,.02,.2,1.8,2.03,L,.025),He=new xs(.1,.03,10,28),Kt=[];for(const o of[-.86,.86]){const t=new F(He,S);t.rotation.y=Math.PI/2,t.position.set(2.945,2.4,o),t.castShadow=!0,Se.add(t),Kt.push(t)}const nt=T("Tarima_42_cajas"),Jt=T("Tarima_1200x1200",nt),Lt=new St,Gt=(o,t,f,d,y,E,B)=>{const D=p(Lt,o,t,f,d,y,E,$,.03);return B&&(D.rotation.y=Math.PI/2),D};for(const o of[-5.05,-2.52,0,2.52,5.05])Gt(12,.22,1.9,0,1.39,o,!1);for(const o of[-5.2,0,5.2]){Gt(12,.2,1.5,o,.1,0,!0);for(const t of[-5.1,0,5.1])p(Lt,1.5,1,1.5,o,.7,t,$,.04);Gt(12,.2,1.5,o,1.18,0,!0)}const ei=_e(Lt,$,o=>{const t=.86+o()*.2;return[t,t*(.97+o()*.04),t*(.92+o()*.06)]});Jt.add(ei);const rt=[];for(let o=0;o<7;o++)for(let t=0;t<3;t++)for(let f=0;f<2;f++){const d=rt.length,y=new F(ee,v);y.castShadow=y.receiveShadow=!0,y.name=`Caja_${d+1}`,nt.add(y),rt.push({o:y,index:d,target:new A(f?3.02:-3.02,1.5+o*3,(t-1)*4.02)})}const Ft=T("Pelicula_estirable",nt),Vt=Ws();Vt.repeat.set(1,3);const ti=new _i(new A(0,-1,0),0),ii=new lt({color:16777215,roughness:.16,metalness:0,transparent:!0,opacity:1,alphaMap:Vt,side:ft,depthWrite:!1,specularIntensity:1,clearcoat:.6,clearcoatRoughness:.1,clippingPlanes:[ti]});function Gi(o,t,f,d,y){const E=[],D=o/2-d,V=t/2-d,j=[[D,V,0],[-D,V,Math.PI/2],[-D,-V,Math.PI],[D,-V,Math.PI*1.5]];for(const[M,z,fe]of j)for(let We=0;We<=10;We++){const gt=fe+We/10*Math.PI/2;E.push([M+Math.cos(gt)*d,z+Math.sin(gt)*d])}E.push(E[0]);let Y=0;const J=[0];for(let M=1;M<E.length;M++)Y+=Math.hypot(E[M][0]-E[M-1][0],E[M][1]-E[M-1][1]),J.push(Y);const se=[],Pe=[],ce=[];E.forEach(([M,z],fe)=>{se.push(M,y,z,M,y+f,z),Pe.push(J[fe]/Y*4,0,J[fe]/Y*4,1)});for(let M=0;M<E.length-1;M++){const z=M*2;ce.push(z,z+2,z+1,z+1,z+2,z+3)}const C=new Ct;return C.setAttribute("position",new ht(se,3)),C.setAttribute("uv",new ht(Pe,2)),C.setIndex(ce),C.computeVertexNormals(),C}const si=21.9,Fi=new F(Gi(12.16,12.14,si-1.25,.35,1.25),ii);Ft.add(Fi);const kt=p(Ft,2.3,1.5,.03,-2.6,12.4,6.1,L,.03);kt.castShadow=!1;const mt=T("Envio"),oi=T("Contenedor_cerrable",mt),we=T("Carcasa",oi),Ue=R(12963021,.5,.45),Ke=R(6252653,.48,.6);p(we,24.4,.4,60.6,0,.2,-22.3,Ke,.05),p(we,24.4,.3,60.6,0,25.75,-22.3,Ue,.04);for(const o of[-12.05,12.05]){p(we,.3,25.4,60.6,o,12.9,-22.3,Ue,.04);for(let t=-51.5;t<7.5;t+=1.45)p(we,.22,24,.32,o+Math.sign(o)*.15,12.9,t,Ue,.03)}for(let o=-10.6;o<=10.6;o+=1.45)p(we,.32,.22,59.6,o,25.95,-22.3,Ue,.03);p(we,24.4,25.4,.3,0,12.9,-52.45,Ue,.04);for(const o of[-12,12])for(const t of[-52.4,7.8])p(we,.65,25.8,.65,o,12.9,t,Ke,.05);for(const o of[.3,25.5])p(we,24.4,.6,.6,0,o,7.8,Ke,.04);for(const o of[-12,12])for(const t of[-52.4,7.8])for(const f of[.35,25.45])p(we,.95,.8,.95,o,f,t,G,.05);const ai=[];for(const o of[-1,1]){const t=T(o<0?"Puerta_izquierda":"Puerta_derecha",oi);t.position.set(o*12,0,8),p(t,11.9,24.7,.35,-o*6,12.85,0,Ue,.035);for(let f=1;f<11;f+=1.4)p(t,.22,23,.16,-o*f,12.85,.25,Ue,.02);for(const f of[3.8,8.2]){k(t,.09,22,-o*f,12.8,.45,S);for(const d of[3,20])p(t,.38,.22,.32,-o*f,d,.45,Ke,.015);p(t,.7,.14,.12,-o*f,10,.6,S,.02)}for(const f of[3.5,12.8,22])p(t,.5,1.1,.2,-o*11.7,f,.2,Ke,.02);ai.push({pivot:t,sign:o})}for(let o=1;o<=3;o++){const t=T(`Carga_interior_${o}`,mt);t.position.z=-o*13,t.add(ei.clone());const f=new Ti(ee,v,42),d=new et;rt.forEach(({target:y},E)=>{d.makeTranslation(y.x,y.y,y.z),f.setMatrixAt(E,d)}),f.castShadow=!1,f.receiveShadow=!0,t.add(f)}const vt=new Map;mt.traverse(o=>{if(o.isMesh){const t=o.material;vt.has(t)||vt.set(t,t.clone()),o.material=vt.get(t),o.userData.ao=!0}});const Bt=T("Destinos_esquematicos"),ni=[],ri=[],li=new Ie({color:ae.purple}),ci=new Ie({color:ae.purple,side:ft}),fi=new Ie({color:ae.purple,transparent:!0,opacity:.16,side:ft,depthWrite:!1}),hi=new _t(2.4,.55);hi.rotateX(-Math.PI/2);const Vi=o=>Math.abs(o.x)<13.4&&o.z>-53.6&&o.z<9.4,jt=new A(0,.05,-22),ui=new et,di=new Ss,ki=new A(0,1,0);for(const[o,t,f]of[[-81,-8,-14],[-61,-83,10],[11,-103,14]]){const d=new A(o,.05,t),y=d.clone().sub(jt),E=jt.clone().addScaledVector(y,.5).add(new A(-y.z,0,y.x).normalize().multiplyScalar(f)),B=new Ms(jt,E,d),D=B.getLength(),V=4,j=[];for(let ce=V/2;ce<D-3;ce+=V){const C=ce/D,M=B.getPointAt(C);if(Vi(M))continue;const z=B.getTangentAt(C);j.push([M,Math.atan2(-z.z,z.x)])}const Y=new Ti(hi,li,j.length);j.forEach(([ce,C],M)=>{di.setFromAxisAngle(ki,C),ui.compose(ce,di,new A(1,1,1)),Y.setMatrixAt(M,ui)}),Y.userData.ao=!0,Y.count=0,Bt.add(Y),ni.push({inst:Y,n:j.length});const J=T("Destino",Bt);J.position.copy(d);const se=new F(new ws(2,40),ci);se.rotation.x=-Math.PI/2,se.position.y=.03,J.add(se);const Pe=new F(new ys(3.2,7,64),fi);Pe.rotation.x=-Math.PI/2,Pe.position.y=.02,J.add(Pe),ri.push(J)}const Bi=i.extensions.has("EXT_color_buffer_half_float")||i.extensions.has("EXT_color_buffer_float"),pi=new Rt(1,1,{type:Bi?At:Ni,samples:4}),ye=new Is(i,pi);ye.setPixelRatio(r),ye.addPass(new Os(n,h));const ve=new ge(n,h,1,1);ve.blendIntensity=a.aoBlend;const ji=ve._overrideVisibility.bind(ve);ve._overrideVisibility=function(){ji(),n.traverse(o=>{o.isMesh&&o.visible&&(o.userData.noAO||!o.userData.ao&&o.material&&o.material.transparent)&&(o.visible=!1,this._visibilityCache.push(o))})},ye.addPass(ve),a.noao&&(ve.enabled=!1),ye.addPass(new ks);let Ht=0,Wt=!1,mi=-1;const vi=new ResizeObserver(()=>Zt());vi.observe(c);function Zt(){if(Wt)return;const o=Math.max(c.clientWidth,320),t=Math.round(o*9/16);i.setSize(o,t,!1),ye.setSize(o,t),h.aspect=16/9,h.updateProjectionMatrix(),$t()}const Je=new A,Hi=new A(.7,.56,1).normalize();function qt(o){Ht=Nt(o,0,1);const t=Ht,f=w(.72,.82,t),d=w(.88,.945,t),y=w(.955,1,t),E=w(.235,.28,t)*(1-w(.48,.515,t));Je.set(0,X(X(1.5,4,E),10.6,f),0),Je.lerp(new A(0,10,-14),d),Je.lerp(new A(-26,6,-48),y);const B=w(.505,.53,t)*(1-w(.6,.625,t)),D=X(X(15.5+3.5*B,27.5,E),63,f)*(1-d)+X(125,190,y)*d;h.position.copy(Je).addScaledVector(Hi,D),h.lookAt(Je);const V=Math.max(9,D*.42);Object.assign(l.shadow.camera,{left:-V,right:V,top:V,bottom:-V,near:1,far:V*6}),l.shadow.camera.updateProjectionMatrix(),l.target.position.copy(Je).setY(0),l.position.copy(l.target.position).addScaledVector(u,V*3),l.shadow.radius=X(12,6,Nt(D/150,0,1));const j=+(D*a.aoR).toFixed(2);j!==mi&&(ve.updateGtaoMaterial({radius:j,thickness:j*a.aoT,distanceExponent:1.4,scale:a.aoScale,samples:a.aoSamples}),ve.updatePdMaterial({radius:6,rings:2,samples:a.aoSamples}),mi=j),it.visible=t<.12,$e.forEach(({o:C,start:M,end:z},fe)=>{const We=w(.005+fe*3e-4,.085+fe*3e-4,t);C.position.copy(M).lerp(z,We),C.scale.setScalar(1-w(.07,.12,t))}),ue.visible=t<.26,De.opacity=(1-w(.225,.26,t))*.85,ue.geometry.setDrawRange(0,Math.floor(de*w(.015,.11,t)/2)*2),Oe.visible=t>=.1&&t<.26,Ce.opacity=.52*w(.1,.17,t)*(1-w(.235,.26,t)),re.visible=t>.07&&t<.24,K.visible=t>=.385&&t<.755,K.position.set(0,0,0);const Y=3.05*w(.385,.435,t);v.clippingPlanes=t<.44&&t>=.385?[new _i(new A(0,-1,0),Y)]:null,Fe.visible=t>=.24&&t<.515,q.position.y=X(-7,0,w(.24,.285,t)),Q.position.y=X(8.5,5.8,w(.25,.29,t)),Q.position.y=X(Q.position.y,3.9,w(.32,.355,t)),Q.position.y+=8*w(.43,.48,t),q.position.y-=7*w(.48,.515,t),Q.position.y+=8*w(.48,.515,t),te.visible=t>=.32&&t<.45,te.position.x=X(-5,0,w(.32,.355,t)),Xe.geometry.setDrawRange(0,Math.floor(ot*w(.35,.4,t)/3)*3),Ae.forEach((C,M)=>{const z=((t-.32)*10+M/32)%1;C.position.set(-6.8+Math.sin(M*2.4)*.43*(1-z),5.4-z*2.7,Math.cos(M*3.2)*.43*(1-z))});const J=w(.4,.44,t)*(1-w(.47,.53,t));v.emissive.setRGB(.55,.32,.12),v.emissiveIntensity=J*.45,ie.visible=t>=.51&&t<.62;const se=Bs(.52,.6,t);Ye.position.y=X(3.15,.1,se),Ot.position.y=Ye.position.y,me.position.x=X(6,3.45,w(.51,.54,t));const Pe=w(.505,.525,t)*(1-w(.605,.62,t));if(It.scale.set(Math.max(.001,Pe),1,Math.max(.001,Pe)),xe.scale.setScalar(.01+.99*w(.555,.59,t)),Se.visible=t>=.62&&t<.755,je.position.z=X(4,2.03,w(.62,.66,t)),Kt.forEach((C,M)=>C.position.x=X(5,2.945,w(.64+M*.006,.68+M*.006,t))),nt.visible=t>=.72,Jt.scale.setScalar(Math.max(.001,w(.72,.745,t))),t>=.72&&t<.755){const C=w(.72,.755,t);K.position.lerpVectors(new A(0,0,0),rt[0].target,C)}rt.forEach(({o:C,index:M,target:z})=>{const fe=M===0?.75:.753+M*.00215,We=fe+.012;C.visible=t>=fe;const gt=w(fe,We,t);C.position.copy(z),C.position.y+=(1-gt)*7}),Ft.visible=t>=.85,ti.constant=X(1.25,si+.1,w(.85,.878,t)),kt.visible=t>=.872,kt.position.z=X(9,6.12,w(.872,.882,t)),mt.visible=t>=.895;const ce=w(.895,.918,t);vt.forEach(C=>{const M=ce<.999;C.transparent!==M&&(C.transparent=M,C.needsUpdate=!0),C.opacity=ce,C.depthWrite=!M}),ai.forEach(({pivot:C,sign:M})=>C.rotation.y=M*X(-Math.PI*.62,0,w(.935,.974,t))),nt.position.z=18*w(.88,.91,t)-20*w(.915,.945,t),Bt.visible=t>=.955,ni.forEach(({inst:C,n:M},z)=>{C.count=Math.round(M*w(.955+z*.005,.978+z*.005,t))}),ri.forEach((C,M)=>C.scale.setScalar(Math.max(.001,w(.972+M*.005,.984+M*.005,t)))),n.updateMatrixWorld(!0),e.onProgress&&e.onProgress(t,gi(t))}function gi(o){const t=Ei.findIndex(f=>o>=f.start&&o<f.end);return t<0?Ei.length-1:t}function $t(){Wt||ye.render()}async function Wi(o){return qt(o),$t(),new Promise(t=>i.domElement.toBlob(t,"image/png"))}function Zi(){i.setPixelRatio(1),ye.setPixelRatio(1),i.setSize(1920,1080,!1),ye.setSize(1920,1080),h.aspect=16/9,h.updateProjectionMatrix()}function qi(){Wt=!0,vi.disconnect();const o=new Set,t=new Set([b,W,Vt,Ne]);n.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material:[f.material]).forEach(d=>o.add(d))}),[v,S,_,L,I,G,H,$,ze,Ve,Ce,De,le,Ge,Qe,pt,ii,ke,Me,li,ci,fi,Ue,Ke].forEach(f=>o.add(f)),o.forEach(f=>f.dispose()),t.forEach(f=>f.dispose()),N.forEach(f=>f.dispose()),ve.dispose(),ye.dispose(),pi.dispose(),g.dispose(),i.dispose(),i.domElement.remove()}return qt(0),Zt(),{scene:n,camera:h,renderer:i,gtao:ve,setProgress:qt,render:$t,resize:Zt,stageAt:gi,still:Wi,setExportSize:Zi,dispose:qi,get progress(){return Ht}}}export{Ks as DURATION,Ei as STAGES,Qs as createSDHAnimation};
